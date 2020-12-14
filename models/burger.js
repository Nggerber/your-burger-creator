const orm = require("../config/orm");

const burger = {
    all: function (cb) {
        
        orm.selectAll("burgers", function (res, err) {
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

    update: function (newColVal, eaten, cb) {
        orm.update("burgers", newColVal, eaten, function (res, err) {
            if (err) throw err;
            cb(res);
        });
    },

};

module.exports = burger;