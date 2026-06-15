const jwt = require('jsonwebtoken');
const User=require("../Models/users");

const userAuth = async (req, res, next) => {
  try {
      const { token } = req.cookies;
      if (!token) {
         throw new Error("Token doesnot Exist");
      }
      const payload = jwt.verify(token, "Joy@13412");
      //  console.log(payload);

      const { _id } = payload;
      if (!_id) {
         throw new Error("Id is missing");
      }

       const result = await User.findById(_id);

       if (!result) {
          throw new Error("User Doesnot Exist");
       }

       req.result=result;

      next();

  }
   catch (err) {
       res.send("Error " + err.message);
  }
};

module.exports=userAuth;