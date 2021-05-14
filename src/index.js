const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware=require('./app/middlewares/SortMiddleware');
const app = express();

const db=require('./config/db');
//use body on POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//custom middlewares
app.use(SortMiddleware);
//connect to DB
db.connect();
const route=require('./routes')

app.use(express.static(path.join(__dirname,'public')));
//Http Logger
app.use(morgan('combined'));
//Template engine
app.engine('hbs', handlebars({
  extname:'.hbs',
  helpers:{
    sum:(a,b)=>a+b,
    sortable:(field,sort)=>{

      //tao icon 
      const sortType = field === sort.name ? sort.type : 'default';
      const icons={
        default:'oi oi-elevator',
        desc:'oi oi-sort-descending',
        asc:'oi oi-sort-ascending'
      }

      //Tao type tren url
      const types={
        default:'desc',
        asc:'desc',
        desc:'asc',
      }
      const icon=icons[sortType];

      const type=types[sortType];
      return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`;
    }
  }
}));
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');
//set path views
app.set('views',path.join(__dirname,'resources','views'))

//config route init
route(app);


app.listen(process.env.PORT || 3000)