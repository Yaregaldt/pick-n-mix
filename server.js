//installed the dependencies = see package.json => express-handlebars-layouts(delete this comment)


//REQUIRE LIBRARY:
//=======================================================

//first thing we do after installing the dependencies. now we import our libraries that we will use. in this case: express library, app portion of express and then the layouts of handlebars the template engine
const express = require("express");
const expressLayouts= require("express-handlebars-layouts");
const routes = require("./controllers");
const path = require("path");


//SET UP THE EXPRESS SERVER:
const app = express();
const PORT = process.env.PORT || 3001;


//SET UP MIDDLEWARE:
//testing middleware
const middleware = (req, res, next) => {
    console.log("hello world");
};

//=======================================================

// Sets up the Express app to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up our view engine: our view engine is handlebars for the V in MVC
app.set("view engine", "handlebars"); 

//this is where our views will be coming from => from our views directory
app.set("views",__dirname + "/views");

//we hook up the express layouts = idea behind this is every single file is placed inside this layout file so we dont have to duplicate every single begining and ending html.
app.set("layout", "layout/layouts"); 

//we have to let express server to USE the express layouts
app.use(expressLayouts);

//we need to let express server know where the static html pages are located. in this case its public html folder.
app.use(express.static('public')); 

//we need to use express server to use the routes we code:
app.use(routes);


//SERVER START:
//===============================================
app.listen(PORT, () => {
    console.log( `App is listening on dis ${PORT}`)
}); //we want our app to listen to a certain port during development but by default we will use 3001.


//since it is difficult to work with one huge server.js files full of routes, best practice is to divide up routes.
//we place all our routes = controllers in the folder ./controllers/api/index.js


//next to do is sessions:
