const burger = require("../models/burger")

const express = require("express")

const router = express.Router();

//create all of the rotes and set logic for those routes

router.get("/", function (req, res) {

    burger.all(function (data) {
        let burgerObject = {
            burgers: data
        };

        res.render("index", burgerObject);
    });
    // res.render("index", {})
});

// route to post new burger to the list
router.post("/api/burgers", function (req, res) {

    burger.create(
        ["burger_name"],
        [req.body.burger_name],

        function (result) {
            res.json({ id: result.insertId });
        });
});

// route to switch the devoured boolean
router.put("/api/burgers/:id", function (req, res) {
    let eaten = "id = " + req.params.id;

    burger.update(
        { devoured: true },
        eaten,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end()
            }
        }
    )
})

module.exports = router;
