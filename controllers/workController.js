const Work = require('../models/userWork');

// ADD WORK ROUTE
exports.getWork = (req, res) => {
    res.render("addwork");
};

// POST HOME ROUTE
exports.postHome = (req, res) => {
    Work.create(req.body.post, (err, done) => {
        if (err) {
            console.log("Error occured while posting to home", err);
            res.redirect("/home");
        } else {
            res.redirect("/home");
        }
    });
};