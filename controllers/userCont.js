
const UserModel = require('../model/usersSchema');
const moment = require("moment");

exports.registerCont = async (req, res) => {
   const { filename } = req.file;
   const { uName, uEmail, password } = req.body;

   if (!uName || !uEmail || !password || !filename) {
      return res.status(406).json({ status: 406, message: "Fill all the data" })
   } else {
      try {
         const date = moment(new Date()).format("YYYY-MM-DD");

         const user_data = new UserModel({
            uName: uName,
            uEmail: uEmail,
            password: password,
            imgPath: filename,
            date: date
         });
         const finalData = await user_data.save();
         return res.status(201).json(finalData)
      } catch (error) {
         return res.status(401).json(error.message)
      }
   }

}

// getDataCont
exports.getDataCont = async (req, res) => {
   try {
      const allData = await UserModel.find({});
      return res.status(201).json(allData)
   } catch (error) {
      return res.status(401).json(error.message)
   }
}


// deleteDataCont
exports.deleteDataCont = async (req, res) => {
   try {
      const { id } = req.params;
      await UserModel.deleteOne({ _id: id });
      return res.status(201).json({ message: "Successfully delete" })
   } catch (error) {
      return res.status(401).json(error.message)
   }
}

