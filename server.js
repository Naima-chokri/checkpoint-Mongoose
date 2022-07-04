const express = require("express");
const connectDB = require("./config/connectDB");
const Person = require("./model/Person");

const app = express();
const port = 5000;

connectDB();

app.use(express.json());

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Example app listening on port ${port}!`)
);

/* --------------- code --------------- */
//---------------------------------------
// Create and Save a Record of a Model
//---------------------------------------
const addPerson = new Person(
    {
        name: "ali",
        age: 10,
        email: "ali@outlook.fr",
        favoriteFoods: ["Pizza", "Spaghetti"],
    }
)
addPerson.save().then(res => {console.log(res)})
//---------------------------------------
// Create Many Records with model.create()
//---------------------------------------
Person.create([
    {
        name:"Person_1",
        age:34,
        email: "Person_1@outlook.fr",
        favoriteFoods:["Food1","Food2"]
    },
    {
        name:"Person_2",
        age:43,
        email: "Person_2@outlook.fr",
        favoriteFoods:["Food3","Food4"]
    },
    {
        name:"Person_3",
        age:19,
        email: "Person_3@outlook.fr",
        favoriteFoods:["Food5","Food6"]
    }
]).then(res => {console.log(res)})
//---------------------------------------
// Use model.find() to Search Your Database
//---------------------------------------
Person.find().then(res => {console.log(res)})
//---------------------------------------
// Use model.findOne() to Return a Single Matching Document from Your Database
//---------------------------------------
Person.findOne({'name' : 'ali'}).then(res => {console.log(res)})
//---------------------------------------
// Use model.findById() to Search Your Database By _id
//---------------------------------------
Person.findById('62c2e525b6faa5e0dd75a80e').then(res => {console.log(res)})
//---------------------------------------
// Perform Classic Updates by Running Find, Edit, then Save
//---------------------------------------

//---------------------------------------
// Perform New Updates on a Document Using model.findOneAndUpdate()
//---------------------------------------
// Person.findByIdAndUpdate(
//   "62c2e76efb0d75291956a99b",
//   { age: 20 },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Updated User");
//     }
//   }
// );
