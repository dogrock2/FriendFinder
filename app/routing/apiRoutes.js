const express = require("express");
const router = express.Router();
const friends = require('../data/friends.js');

router.route("/friends").post((req, res) => {    
    let result = req.body;
    let frnd = new friends.Friend();
    return res.json(frnd.displayResult(result));
});

router.route("/friends").get((req, res) => {
    return res.json(friends.friendsProfiles);
});

module.exports = router;


