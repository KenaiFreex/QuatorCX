//Initializations || Inicializaciones
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');

const exphbs = require('express-handlebars');

require('./database');




//Settings || Configuración

app.set('port', process.env.PORT || 3000); //Set port || Fijar puerto

app.set('views',path.join(__dirname,'views')); //set views path || Fijar la carpeta de vistas(views)


app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname : '.hbs'

})); 

app.set('view engine', '.hbs');



// MidleWares || Funciones que se ejecutan antes de llegar al servidor o a las rutas

app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));
app.use(session({

  secret: 'mysecretapp',
  resave: true,
  saveUninitialized: true
}));

// Global Variables || Variables Globales



//Routes || rutas

app.use(require('./routes/index'));
app.use(require('./routes/testing'));
app.use(require('./routes/users'));




// Static Files || Archivos Estáticos

app.use(express.static(path.join(__dirname,'public')));


// Server is Listening || Servidor escucha

app.listen(app.get('port'),() => {

  console.log('Server on port ', app.get('port'));
});
