const addUsersModel = require('../models/addUsers');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  addUsersModel.findById(req.params.addUsersId, function(err, addUsersInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "User Added found!!!", data:{addUsers: addUsersInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let addUsersList = [];
addUsersModel.find({}, function(err, addUsers){
   if (err){
    next(err);
   } else{
    for (let addUser of addUsers) {
      addUsersList.push({id: addUser._id, name: addUser.name, released_on: addUser.released_on});
    }
    res.json({status:"success", message: "user list found!!!", data:{addUsers: addUsersList}});
       
   }
});
 },
updateById: function(req, res, next) {
  addUsersModel.findByIdAndUpdate(req.params.addUserId,{name:req.body.name}, function(err, addUsersInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "User Data updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  addUsersModel.findByIdAndRemove(req.params.addUserId, function(err, addUsersInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "User is deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  addUsersModel.create({ name: req.body.name, phoneNumber:req.body.phoneNumber, email:req.body.email , released_on: req.body.released_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "New User added successfully!!!", data: null});
      
    });
 },
}