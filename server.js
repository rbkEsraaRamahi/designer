var express = require ('express')
var app = express()

app.get('/', function (req, res){
	res.send('insert your repeated sentence :)')
})

app.post('/done',function(req,res){
	var yourStatment = req.body.yourStatment;
	res.send('index.jsx')
})

app.listen(7000, function(){
	console.log('this app listening on port 7000')
})