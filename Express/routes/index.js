var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '45.76.222.210',
    user: 'root',
    password: '6644',
    port: '6644',
    database: 'Lila',
    insecureAuth: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query("select * from User",(err, row)=>{
        res.send(row);
    });
});

router.get('/page', function(req, res, next) {
    var f = (mes) => "'" + mes + "'";
    var query = req.query;

    connection.query("select * from GroupTable group_SC="+f(query.GSC),(err, row)=>{
        res.send(row.slice(query.ack,query.number));
    });
});

module.exports = router;
