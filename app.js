var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//set up DB

const oracledb = require('oracledb');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//connect to DB

async function runApp()
{
  console.log('runApp running');
 let connection;
  try {
  // Use the connection string copied from the cloud console
  // and stored in connstring.txt file
  console.log('connection trying')
  connection = await oracledb.getConnection({ user: "admin", password: "LocalLibrary1", connectionString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-ashburn-1.oraclecloud.com))(connect_data=(service_name=gd62a8892716de6_librarydb_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))" });
// Create a table
  await connection.execute(`begin execute immediate 'drop table book'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
  await connection.execute(`create table book (title varchar(100), author varchar(100), hasRead varchar(1))`);
// Insert some rows
const sql = `INSERT INTO book (title, author, hasRead) VALUES ('East of Eden', 'John Steinbeck', 'Y')`;
await connection.execute(sql);
// connection.commit(); // uncomment to make data persistent

// Now query the rows back
const result = await connection.execute(`SELECT * FROM book`);
console.dir(result.rows, { depth: null });
} catch (err) {
console.error(err);
} finally {
if (connection)
  {
    try {
      await connection.close();
    } catch (err) {
    console.error(err);
    }
  }
  }
}
runApp();

module.exports = app;
