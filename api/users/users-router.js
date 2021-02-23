const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted.js");
const checkDept = require("../auth/check-department.js");

router.get("/", restricted, checkDept("admin"), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
// the department is admin right now