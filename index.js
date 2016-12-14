//import dei package necessari per lo sviluppo dell'applicazione
//libreria per creazione e gestione server
var express = require('express');
//libreria per lettura messaggi in get/post nelle richieste http
var bodyParser = require('body-parser');
//libreria per gestire il dato che utilizzeremo
var data = require('./data.js');
//inizializzazione di express
var app = express();
var port = process.env.PORT || 5000;
app.set('view engine', 'ejs');//impostare l'engine di ejs
app.set('views', __dirname+"/");//ridirigere il default di ejs ed express sulla cartella da me desiderata (root)
app.use(express.static(__dirname + '/static'));//impostare la cartella per i dati statici 
//inizializzazione body-parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
//richiesta home iniziale
app.get("/",function(request,response){
    response.render('index', {
        person : {},
        hid : 'none'
    });
});
//gestione della richiesta in post della search
app.post("/search",function(request,response){
    //console.log("search requested");
    var id = request.body.searchId;
    var personTmp = data.showEmployee(id);
    //console.log(personTmp);
    response.render('index',{
        person : personTmp,
        hid : 'block'
    });
});
//gestione della richiesta in post della remove
app.post("/remove",function(request,response){
    var id = request.body.removeId;
    data.deleteEmployee(id);
    response.render("index",{
        person: {},
        hid: 'none'
    });
});
//gestione della richiesta post della insert/modify
app.post("/work",function(request,response){
    var id;
    if(typeof request.body.id !== 'undefined' && request.body.id){
        id = request.body.id;
        //console.log("id: "+id);
    }
    else{
        id = -1;
    }
    var name = request.body.name;
    var surname = request.body.surname;
    var level = request.body.level;
    var salary = request.body.salary;
    //console.log(id);
    data.insModEmployee(id,name,surname,level,salary);
    response.render("index",{
        person: {},
        hid: 'none'
    });
});
//attivazione server
app.listen(port);
console.log('Server started!');