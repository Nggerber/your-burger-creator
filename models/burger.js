const orm = require("../config/orm");

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    create: function (cols, newVals, cb) {
        orm.insertOne("burgers", cols, newVals, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    update: function (newColVal, condition, cb) {
        orm.update("burgers", newColVal, condition, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

};

module.exports = burger;