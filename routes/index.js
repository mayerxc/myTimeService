var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

//get the json if there is param in url
router.get('/:time', function(req, res){
    function unixToNatural(unix) {
        var date = new Date (unix * 1000);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month = months[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        var result = month + " " + day + ", " + year;
        return result;
    }
    
    if (!isNaN(req.params.time)) { // <--if is a number that can be unix time
        var result = unixToNatural(req.params.time); // run that number to find natural time in function above
        var data = { unix: req.params.time, natural: result }; // put that number and natural time into json format
        res.json(data); //respond the page in json
    } else {
        var natural = new Date(req.params.time);// if NaN then try to turn it into a date
        if (!isNaN(natural)){ //did the date turn into a javascript date number???
            var unix = natural / 1000;
            var data3 = { unix: unix, natural: req.params.time };
            res.json(data3);
        } else {// if it didn't turn into a date format respond with nulls
            var data2 = { unix: null, natural: null };
            res.json( data2 );
        }
    }
});

module.exports = router;
