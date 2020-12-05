const sqlite3 = require('sqlite3');

let sqlDb;


// name the columns of our tables for localization
const columnNames = {
    businessId: "id",
    businessName: "name",
    businessPassword: "password",
    businessStatus: "status",
    businessEmail: "email",
    businessPhone:"phone",
    businessAddress: "address",
    businessType:"type",
    businessDescription:"description",
    mondayHours: "monday_hours",
    tuesdayHours: "tuesday_hours",
    wednesdayHours: "wednesday_hours",
    thursdayHours: "thursday_hours",
    fridayHours: "friday_hours",
    saturdayHours: "saturday_hours",
    sundayHours: "sunday_hours",
    metricId: "metric_id",
    metricName: "metric",
    metricOwner: "owner",
    metricConfirms: "confirms",
    metricDenies: "denies",
    userID: "id",
    userName: "username",
    userPassword: "password",
    userEmail: "email",
    userType: "type",
  };
  Object.freeze(columnNames);

function createDb() {
    console.log("created our db!");
    sqlDb = new sqlite3.Database('scopedb.db', function() {
      createBusinessTable();
      createMetricTable();
      createUserTable();
    });
  };

function createBusinessTable(){
    sqlDb.run(`CREATE TABLE IF NOT EXISTS businesses (
    ${columnNames.businessId} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${columnNames.businessName} TEXT NOT NULL,
    ${columnNames.businessPassword} TEXT NOT NULL,
    ${columnNames.businessStatus} TEXT NOT NULL,
    ${columnNames.businessEmail} TEXT NOT NULL,
    ${columnNames.businessPhone} TEXT NOT NULL,
    ${columnNames.businessType} TEXT NOT NULL,
    ${columnNames.businessDescription} TEXT NOT NULL,
    ${columnNames.businessAddress} TEXT NOT NULL,
    ${columnNames.mondayHours} TEXT NOT NULL,
    ${columnNames.tuesdayHours} TEXT NOT NULL,
    ${columnNames.thursdayHours} TEXT NOT NULL,
    ${columnNames.wednesdayHours} TEXT NOT NULL,
    ${columnNames.fridayHours} TEXT NOT NULL,
    ${columnNames.saturdayHours} TEXT NOT NULL,
    ${columnNames.sundayHours} TEXT NOT NULL
  )`);
};

function createMetricTable(){
    sqlDb.run(`CREATE TABLE IF NOT EXISTS metrics (
    ${columnNames.metricId} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${columnNames.metricName} TEXT NOT NULL,
    ${columnNames.metricOwner} INTEGER NOT NULL,
    ${columnNames.metricConfirms} INTEGER,
    ${columnNames.metricDenies} INTEGER
    )`);
  };


  function createUserTable(){
      sqlDb.run(`CREATE TABLE IF NOT EXISTS users (
      ${columnNames.userID} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${columnNames.userName} TEXT NOT NULL,
      ${columnNames.userPassword} TEXT NOT NULL,
      ${columnNames.userEmail} TEXT NOT NULL,
      ${columnNames.userType} TEXT NOT NULL
  )`);
};


  // Helper wrapper functions that return promises that resolve when sql queries are complete.

function run(sqlQuery) {
    return new Promise((resolve, reject) => {
      sqlDb.run(sqlQuery, (err) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve();
        }
      })
    });
  };

  function get(sqlQuery) {
    return new Promise((resolve, reject) => {
      sqlDb.get(sqlQuery, (err, row) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(row);
        }
      })
    });
  };

  function all(sqlQuery) {
    return new Promise((resolve, reject) => {
      sqlDb.all(sqlQuery, (err, rows) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    });
  };

  createDb();

  module.exports = {
    columnNames,
    get,
    all,
    run,
  };
