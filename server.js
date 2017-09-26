var express = require ('express')
var app = express()
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', function (req, res){
// 	res.render('index.jsx')
// })

app.post('/',function(req,res){
	var yourStatment = req.body.yourStatment;
	var repeats = req.body.repeats;
	res.render('index.jsx')
})

app.listen(7000, function(){
	console.log('this app listening on port 7000')
})