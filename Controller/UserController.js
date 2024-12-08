const path = require("path");
const info = require("../Model/userInformation");
function usercontroller(req, res) {
  res.sendFile(path.join(__dirname, "../view/index.html"));
  //   res.send("all users");
}
function userInfoController(req, res) {
  info.push(req.body);
  res.send(info);
}

module.exports = { usercontroller, userInfoController };
