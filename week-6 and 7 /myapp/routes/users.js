var express = require('express');
var router = express.Router();
const fs= require('fs');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
router.use(passport.initialize());

 let uset = fs.readFileSync("userfile.json");
 console.log("file"+uset);
 let useth=JSON.parse(uset);

 passport.use(new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password'
    },
    function(username, password, done) {
        let flag = 0; let copy=0;
        console.log("enter ls function" +"&&" +useth);
        for(let index=0;index<useth.users.length;index++) {
            if(username===useth.users[index].name){
                if(password=== useth.users[index].password){
                    console.log("successful");
                    flag=1;
                    copy=index;
                    break;
                }
                else{
                    console.log("wrong password");
                }
            }
            else{
                console.log("user not found");

            }
        }
        if(flag===1){
            return done(null,useth.users[copy].name);
        }
        else{
            return done(null, false);
        }
    }))


/* GET users listing. */




router.get('/',function(req, res){

  fs.readFile('userfile.json',function(err,data){
    if(err){
    throw err;
    }
    var getUsers= JSON.parse(data);
    res.send(getUsers);

  })


})
router.post('/', function(req,res){

    fs.readFile('userfile.json',function(err,data) {
        if (err) {
            console.log(err);
        }
        var usersname = JSON.parse(data);
        usersname.users.push(req.body);

        fs.writeFile('userfile.json', JSON.stringify(usersname), function (err) {
            if (err) {
                console.log(err);
            }
            console.log("appended");
        })
    })
    res.send('User Added');

})

router.delete('/',function(req, res){
        fs.readFile('userfile.json', function(err,data){
          if(err){
            console.log(err);
          }
          var rawdata= JSON.parse(data);

         let flag=0;
            for(let index=0;index< rawdata.users.length;index++){
               if(JSON.stringify(req.body)===JSON.stringify(rawdata.users[index])){
                  rawdata.users.splice(index,1);
                    flag=1;
              }
            }
            if(flag===0){
                res.send("name not found")
            }
           else{
               fs.writeFile("userfile.json",JSON.stringify(rawdata),function (err) {
                   if(err){
                       console.log(err);
                   }
                   else{
                       res.send(rawdata);
                   }

               })
            }
        })

})

router.put('/', function(req, res){
fs.readFile("userfile.json",function (err,data) {
    if (err){
        console.log(err);
    }
    else{
        let rawdata=JSON.parse(data);
        for(let index =0;index<rawdata.users.length;index++){
            console.log(req.body);
            //if(Object.getOwnPropertyNames(rawdata.users[index])[0]===Object.getOwnPropertyNames(req.body)[0]){
              if(rawdata.users[index].name===req.body.name){

                rawdata.users[index]=req.body;
            }
        }
        
        fs.writeFile("userfile.json",JSON.stringify(rawdata),function(err) {
            if(err){
                console.log(err)
            }
            res.send(rawdata);
        })
    }

});


})

router.post('/login',passport.authenticate('local',{session:false}),function(req,res)
{
    res.send("authenticated");
});



module.exports = router;
