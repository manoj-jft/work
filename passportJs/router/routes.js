const express = require('express')
let alert = require('alert');
var db = require('../model/db');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

let user = db.models.user;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     user.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));


router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.get('/login',(req,res)=>{
    res.render('login.ejs')
})

router.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})

router.post('/signup',(req,res)=>{
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  

  user.create({

      name :name,
      email:email,
      password:password
  
  }).then(()=>{

    console.log(name,email,password);
  }).catch((err)=>{

    console.log(err)
  })

  res.redirect('/login')
})

router.post('/login',passport.authenticate('local'),(req,res)=>{
  res.redirect('/userDashboard')
})

router.post('/userDashboard',(req,res)=>{
  let userEmail = req.body.email;
  let pass = req.body.password;
  console.log(userEmail,pass);
  user.findAll({where:{
    email:userEmail
  }}).then((data)=>{

    
      if(data.length==0){
      alert("user does not exists")
      res.redirect('/login')
    }
    else{
      if(data[0].password!=pass){
        alert("Wrong password")
        res.redirect('/login')
      }
      else{
        res.render('userDashboard.ejs')
      }
    }
  })

  
})

module.exports = router;