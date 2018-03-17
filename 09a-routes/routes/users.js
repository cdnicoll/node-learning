const _ = require('lodash');
const express = require("express");
const router = express.Router();

// first route to be hit will be the first one sent to the browser
router
    // get all users
    .get("/", (req, res) => {
        res.send(users);
    })
    // get user by ID
    .get("/:id", (req, res) => {
      var user = _.find(users, {id: Number(req.params.id)});
      if (user) {
        res.send(user);
      }
      else {
        res.status(404).send("User not found");
      }
    })
    // delete user
    .delete("/:id", (req, res) => {
      // NOTE: using es6 templating
     const {id} = req.params;
     const index = users.findIndex(user => user.id == id);

      if (index > -1) {
        users.splice(index, 1);
        res.sendStatus(200);
      }
      else {
        res.status(404).send('User ${id} does not exist');
      }
    });

module.exports = router;


// mock users: https://mockaroo.com/
var users = [{
    "id": 1,
    "first_name": "Dal",
    "last_name": "McCullock",
    "email": "dmccullock0@paypal.com",
    "gender": "Male",
    "ip_address": "49.107.193.90"
  }, {
    "id": 2,
    "first_name": "Row",
    "last_name": "Laurenson",
    "email": "rlaurenson1@umn.edu",
    "gender": "Female",
    "ip_address": "178.131.224.119"
  }, {
    "id": 3,
    "first_name": "Gleda",
    "last_name": "Hyslop",
    "email": "ghyslop2@intel.com",
    "gender": "Female",
    "ip_address": "160.133.142.103"
  }, {
    "id": 4,
    "first_name": "Stephen",
    "last_name": "Casbourne",
    "email": "scasbourne3@lycos.com",
    "gender": "Male",
    "ip_address": "198.92.154.23"
  }, {
    "id": 5,
    "first_name": "Andonis",
    "last_name": "Steanyng",
    "email": "asteanyng4@naver.com",
    "gender": "Male",
    "ip_address": "193.20.71.46"
  }, {
    "id": 6,
    "first_name": "Virginie",
    "last_name": "Beslier",
    "email": "vbeslier5@time.com",
    "gender": "Female",
    "ip_address": "198.124.15.154"
  }, {
    "id": 7,
    "first_name": "Shellysheldon",
    "last_name": "Vasyunkin",
    "email": "svasyunkin6@nature.com",
    "gender": "Male",
    "ip_address": "19.172.99.72"
  }, {
    "id": 8,
    "first_name": "Charissa",
    "last_name": "Nulty",
    "email": "cnulty7@cargocollective.com",
    "gender": "Female",
    "ip_address": "190.182.135.64"
  }, {
    "id": 9,
    "first_name": "Barris",
    "last_name": "Lightowler",
    "email": "blightowler8@ning.com",
    "gender": "Male",
    "ip_address": "133.190.175.27"
  }, {
    "id": 10,
    "first_name": "Alfonso",
    "last_name": "Le Galle",
    "email": "alegalle9@wiley.com",
    "gender": "Male",
    "ip_address": "93.69.253.53"
  }, {
    "id": 11,
    "first_name": "Earvin",
    "last_name": "Harly",
    "email": "eharlya@mit.edu",
    "gender": "Male",
    "ip_address": "137.188.252.227"
  }, {
    "id": 12,
    "first_name": "Mace",
    "last_name": "Kinder",
    "email": "mkinderb@merriam-webster.com",
    "gender": "Male",
    "ip_address": "222.106.33.182"
  }, {
    "id": 13,
    "first_name": "Mercedes",
    "last_name": "Farrier",
    "email": "mfarrierc@sciencedirect.com",
    "gender": "Female",
    "ip_address": "31.43.125.115"
  }, {
    "id": 14,
    "first_name": "Ursuline",
    "last_name": "Voaden",
    "email": "uvoadend@cocolog-nifty.com",
    "gender": "Female",
    "ip_address": "127.81.63.133"
  }, {
    "id": 15,
    "first_name": "Leia",
    "last_name": "Cubbin",
    "email": "lcubbine@va.gov",
    "gender": "Female",
    "ip_address": "108.250.28.39"
  }, {
    "id": 16,
    "first_name": "Traver",
    "last_name": "Franies",
    "email": "tfraniesf@netvibes.com",
    "gender": "Male",
    "ip_address": "152.134.194.236"
  }, {
    "id": 17,
    "first_name": "Yettie",
    "last_name": "Gagen",
    "email": "ygageng@dropbox.com",
    "gender": "Female",
    "ip_address": "0.88.124.68"
  }, {
    "id": 18,
    "first_name": "Lauretta",
    "last_name": "Hefferon",
    "email": "lhefferonh@weebly.com",
    "gender": "Female",
    "ip_address": "37.53.184.255"
  }, {
    "id": 19,
    "first_name": "Hastie",
    "last_name": "McNulty",
    "email": "hmcnultyi@yelp.com",
    "gender": "Male",
    "ip_address": "9.66.115.39"
  }, {
    "id": 20,
    "first_name": "Deane",
    "last_name": "Wackly",
    "email": "dwacklyj@yellowbook.com",
    "gender": "Female",
    "ip_address": "8.140.136.199"
  }];