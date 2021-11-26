const express = require('express')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
const port = 8081
const recharge = require('./recharge_finder')

//==========BDD MongoDB============================
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://141.94.79.110:27017'

//=================Serveur express=================

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('hbs', engine({
    defaultLayout: 'home',
    extname: '.hbs'
  }));

app.set('view engine', 'hbs');

app.get('/', (req,res) => {

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("voitures")
    
        dbo.collection("voiture").find({}).toArray(function(err, result) {
            if (err) throw err
            console.log(result)
            db.close();

            res.render('home', {
                modele_voiture1: result[0].modele,
                modele_voiture2: result[1].modele,
                autonomie_voiture1: result[0].autonomie,
                autonomie_voiture2: result[1].autonomie

            })
        });
    });
});

app.post('/voiture', (req,res) => {
    form_data = req.body
    res.render('voiture', {
        layout: false,
        modele_pre: form_data.modele,
        autonomie_pre: form_data.autonomie
    })
});

app.post('/trajet', (req,res) => {
    form_data = req.body

    raw_data = recharge.get_recharge(form_data.long_a,form_data.lat_a,form_data.long_b,form_data.lat_a,form_data.autonomie).then(value => {
        res.render('trajet', {
            layout: false,
            duree_pre: raw_data.duree,
            message_pre: raw_data.message,
            duree_recharge_pre : raw_data.temps_recharge
        })
    })
});


app.listen(port,() => {
    console.log("Server up and running")
});