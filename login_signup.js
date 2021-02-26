const fs = require("fs")
var readlinesync = require("readline-sync")
var user = readlinesync.question("Do you want to 1.signup or 2.login :-")
if (user == "1") {
  var user_name = readlinesync.question("Enter Your User Name:-")
  var password1 = readlinesync.question("Enter Your password:-")
  var password2 = readlinesync.question("Re-write the password:-")
  if ("@" || "#" in password || password1 >= "0" || password <= "9") {
    if (password1 == password2) {
      var user_details = {
        "user_name": user_name,
        "password1": password1
      }
      const jsonstring = JSON.stringify(user_details)
      fs.writeFile("./data_store.json", jsonstring, err => {
        if (err) {
          console.log("Error writing in file", err)
          if (!(user_name in jsonstring))
            console.log("username already exits")
        } else {
          console.log("congrats", user_name, "you have signup succesfully")
          var Discription = readlinesync.question("Enter Your Description:-")
          var DOB = readlinesync.question("Enter Your Birth Of Date:-")
          var Hobbies = readlinesync.question("Enter Your Hobbies:-")
          var Gender = readlinesync.question("Enter Your Gender Male/Femal/Other:-")

          var mydeatils ={
            "user":
            [{"User_name":user_name , "password1":password1,
            "profile":{"Discription":Discription},
              "DOB":DOB,
              "Hobbies":Hobbies,
              "Gender":Gender
            }]
          } 
          const mystring = JSON.stringify(mydeatils)
          fs.writeFile("./data.store.json",mystring,err=>{
            if(err)throw err;
            console.log(mystring)
          })
        }
      })
    } else {
      console.log("Both password should be same check once..")
    }
  } else {
    console.log("atleast one special charachter or number should be there")
  }
} else if (user == "2") {
  var user_name = readlinesync.question("Enter Your Username for Login:-")
  var user_password = readlinesync.question("Enter Your Password For Login:-")
  fs.readFile("data_store.json", (err, data) => {
    if(err) throw err
    var mydata = JSON.parse((data));
    if (user_name === mydata["user_name"] && user_password === mydata["password1"]) {
        console.log("congrats", user_name, "you have login succesfully")
    } else {
      console.log("Invaild Username And Password..try again")
    }
  })
}

