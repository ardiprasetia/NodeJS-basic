// console.log("Hallo world");
//node -v
//node index.js
//npm init
//installing nodejs framework
//-npm install express

let express = require('express');
let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render("index");
    //, { judul: "NodeJS workshop" }
});

app.get('/about', function(request, response) {
    response.render("index");
});

// app.get('/:name', function(request, response) {
//     // console.log(request.params.name);
//     response.render(" Halo, " + request.params.name + "");
// });

app.get('/:name', function(request, response) {
    // console.log(request.params.name);
    response.render("index", { title: "Halo" + request.params.name });
});
app.listen(3000);