const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://nestorovantonio:KxsQkZLToOJBmhOy@javascriptakademija.3ida2ea.mongodb.net/JavascriptAcademy?retryWrites=true&w=majority";

mongoose.connect(connectionString);

const Users = mongoose.model(
  "users",
  {
    _id: mongoose.Types.ObjectId,
    name: String,
    lastname: String,
    date_of_birth: Date,
  },
  "users"
);

// Users.find({})
//   .then(users => {
//     console.log(users)
//     console.log(users[0].name);
//     console.log(users[0].lastname);
//   }).catch((err) => {
//     console.log(err);
//   });

// create new data in mongodb database

// let newUser = new Users({
//   _id: new mongoose.Types.ObjectId(),
//   name: "Pero",
//   lastname: "Perovski",
//   date_of_birth: new Date("1992-02-01"),
// });

// newUser.save();

// Update existing data in mongodb database

// Users.updateOne()
// Users.update()

Users.updateOne({_id: new mongoose.Types.ObjectId('6421d81d9a62b4800faebb39')}, {lastname: "Zlatevski"})
  .then(user => {
      console.log(user);
  }).catch(err => {
      console.log(err)
  });

// Users.findOne({name: "toce"}).
//   then(user => {
//     console.log(user.name);
//     console.log(user.lastname);
//   }).catch((err) => {
//     console.log(err);
//   });


// Delete existing document in mongodb database

Users.deleteOne({ _id: new mongoose.Types.ObjectId('6421e6eabbc284b031085897')})
  then(user => {
    console.log(user.name + 'successfully deleted.');
  }).catch(err => {
    console.log(err);
  });

