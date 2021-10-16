var express = require("express");
var app = express();

var mongoose=require ("mongoose");
console.log("version: "+mongoose.version);

var db=mongoose.connect("mongodb://localhost:27017/maBdd");
var coursSchema=mongoose.Schema({
   titre: String,
    module: String,
     date:Date,
      heur:Number,
       duree:Number,
       description: String
   });
var cours=mongoose.model("cours",coursSchema );
console.log(cours);

cours.find().then (function (cours){
  console.log(cours);
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.all('/*',function(req,res ,next)
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-with');
  next();
}
);
//afficher tous les cours
app.get("/tcours", function (req, res) {
    cours.find().then(function(u){
      res.json(u);
    });
  });

app.get("/ttcours" ,function (req ,res){
  cours.find({})
  .exec(function(err , cours){
    if(err){
        console.log("erreur")
    }else{
        res.json(cours)

    }

  })
});

//ajouter cours
  app.post('/cours/add', function(req,res){
    var c=new cours();
  	c.titre=req.body.titre;
  	c.module=req.body.module;
    c.date=req.body.date;
    c.heur=req.body.heur;
    c.duree=req.body.duree;
    c.description=req.body.description;
  	c.save(function (err, insertedCour) {
          if(err){
              console.log("erreur")
          }else{
              res.json(insertedCour)

          }
  	});
  });

app.get("/cours/:id" , function(req ,res){
  cours.findById(req.params.id)
  .exec(function (err, cour) {
        if(err){
            console.log("erreur")
        }else{
            res.json(cour)}
          })
});

//modifier cour
app.put("/cour/:id" , function(req ,res){
  cours.findByIdAndUpdate(req.params.id , {$set:{titre:req.body.titre ,module:req.body.module,
  date:req.body.date,
  heur:req.body.heur,
  duree:req.body.duree,
  description:req.body.description}}, {new :true},function (err, UpdatedCours) {
        if(err){
            console.log("erreur")
        }else{
            res.json(UpdatedCours)
          }
          })
});
//delete
app.delete("/courss/:id" , function(req,res){
  cours.findByIdAndRemove(req.params.id, function (err, deletedCours) {
        if(err){
            console.log("erreur")
        }else{
            res.json(deletedCours)
          }
          })
});

app.listen(3500);
