const connection = require('./connection.js');

//helper to convert give items into sql syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    //loop through the values and push to the array as a string
    for (var key in ob) {
        var value = ob[key]

        if (Object.hasOwnProperty.call(ob, key)) {

            // if string with spaces add quatation marks
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single spepaerate string seperated by commas
    return arr.toString();
}

//object for all of the sql statement functions

const orm = {
    selectAll: function (table, cb) {
        
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
        
    },

    insertOne: function (table, cols, newVals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += "(" + cols.toString() + ") ";
        queryString += "VALUES (" + printQuestionMarks(newVals.length) + ")";

        connection.query(queryString, newVals, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },

    update: function (table, newColVal, condition, cb) {
        console.log("values", table, newColVal, condition)
        let queryString = "UPDATE " + table;

        queryString += " SET " + objToSql(newColVal);
        queryString += " WHERE " + condition;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
};

module.exports = orm