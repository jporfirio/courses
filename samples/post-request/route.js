var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json);

router.route('/')
.all(function(req,res,next){
    console.log('alled');
})
//
// router.get('/', function(req,res){
//     console.log(req, res);
// })
//
// router.post('/', function(req, res){
//     console.log('posted');
// });

module.exports = router;
