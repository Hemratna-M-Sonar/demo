const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res)=> {
  res.render('index')
})

app.post("/", function(req, res){
  let data = req.body.newItem;
  fs.writeFile("data.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/');
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server has started");
});