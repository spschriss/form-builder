const { Router } = require("express");
var router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.json({
        message: "This is the forms endpoint",
        status: "success",
        data: {
            forms: [
                { id: 1, name: "Contact Form" },
                { id: 2, name: "Feedback Form" },
                { id: 3, name: "Registration Form" },
            ],
        },
    });
});

module.exports = router;
