var mysql=require('mysql');

var con=mysql.createConnection({
    'host': 'localhost',
    'user' : 'root',
    'password' :'' ,
     'database' : 'srp'
})
con.connect(function(err){
    if(err) throw err;

    console.log("COnnected...")
})

module.exports=con;