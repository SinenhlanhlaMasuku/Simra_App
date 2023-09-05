const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net', // Replace with your MySQL server host
  user: 'sql8644078', // Replace with your MySQL username
  password: 'zUgnAufEc4', // Replace with your MySQL password
  database: 'sql8644078', // Replace with the name of your database
  port: '3306',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');

    //
    connection.query('Create table Student(name VARCHAR(255) NOT NULL, age INT)', (err, results, fields) => {
        if (err) {
          console.error('Error executing query:', err);
          return;
        }
        console.log('Table "student" created successfully');
      });

  //
});
