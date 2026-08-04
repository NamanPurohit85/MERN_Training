const jwt = require("jsonwebtoken");
const secret = "Naman_Purohit_21";
const checkToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    return res.json({ message: "Your cookie is Expired" });
  }
  const user = jwt.verify(token, secret);
  req.user = user;

  next();
};

module.exports = checkToken;
