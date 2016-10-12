var express = require('express')
var app = express()
var port = 4000

//  capture all the request, assume all static files is inside public folder
app.use(express.static(__dirname + '/public'))

//  the view engine for express is ejs. Hence, res.render(index) => index inside the VIEWS FOLDER
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
