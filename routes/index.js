var express = require('express');
var router = express.Router();
const spawn=require("child_process");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/getman/:commandname",function (req,res) { //This things works only fine
    const commandname=req.params.commandname;
    console.log(commandname);
    spawn.exec("man "+commandname+" |col -b",function (err,result) {
        res.setHeader('Content-Type', 'application/json');
        res.send({command_name:commandname,time:new Date().getTime(),mancontent:result});
    });
});
router.get("/getmanweb/:commandname",function (req,res) { //This things works only fine
    const commandname=req.params.commandname;
    console.log(commandname);
    spawn.exec("man "+commandname+" |col -b",function (err,result) {
        res.render('mancontent',{commandname:commandname,content:result
        });
    });
});
module.exports = router;
