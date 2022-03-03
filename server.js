//installed the dependencies = see package.json => express-handlebars-layouts(delete this comment)


//REQUIRE LIBRARY:
//=======================================================

//1. Install the dependencies. These are the imported libraries that we will use. 
//express library, app portion of express and then the layouts of handlebars the template engine
const express = require("express");
const expressLayouts = require("express-handlebars-layouts");
const routes = require("./controllers");
const path = require("path");

const cookieParser = require("cookie-parser");
const sessions = require('express-session');


//2. SET UP THE EXPRESS SERVER:
const app = express();
const PORT = process.env.PORT || 3001;

//Sessions Setup:
//===============================================

//Set up the server sessions using cookie
const oneDay = 1000 * 60 * 60 * 24; //number of milliseconds in 1 day for cookies to expire

app.use(sessions({
    secret: "this is where user login goes",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

//Explanation of code above:
//secret: this is a random unique key used to authenticate a session. (from .env?)
//resave: this enables the sessions to be stored back to sessions store, even is session store was never modified after refresh it (so it persists), default is true 
//saveUninitialized: this allows any uninitalized sessions to be sent to the store.
//cookie:expiration time


//SET UP MIDDLEWARE:
//=======================================================

//Sets up the Express app to handle html parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This lets express server know where the static html pages are located. in this case its public html folder. this is where the html get parsed.
app.use(express.static("public", __dirname + 'public'));

//cookie parser middleware
app.use(cookieParser());

//Set up our view engine: our view engine is handlebars for the V in MVC
app.set("view engine", "handlebars");

//this is where our views will be coming from => from our views directory
app.set("views", __dirname + "/views");

//we hook up the express layouts = idea behind this is every single file is placed inside this layout file so we dont have to duplicate every single begining and ending html.
app.set("layout", "layout/layouts");

//we have to let express server USE the express layouts
app.use(expressLayouts);

//we need to use express server to use the routes we code:
app.use(routes);


//!!!!SET AUTHENTICATION CREDENTIALS (dont hard code and user login found in database)!!!!
//============================================
const myusername = "user1";
const mypassword = "mypassword1"

//this is a variable to save the session:
let session;

//=============================================


//ADD ENDPOINTS TO THE path (place in homeroutes and index???)
//i think B made the routes? 
//==============================================

//1. Landing page on server: http://localhost:3001/
//This will render and serve the HTML form to the client to fill in the login credentials. If the user is logged in, we’ll display a logout link.

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send("welcome Customer to main page <a href=\'/logout'> click to logout </a>");
    } else
        res.sendFile('views/index.html', { root: __dirname })//enter the directory name of the routing
});


//2. login page displayed on localhost:3001/user
//this is the userlogin page:

app.post('/user', (req, res) => {
    if (req.body.username == myusername && req.body.password == mypassword) {
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session);
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else {
        res.send('Invalid username or password');
    }
})

//Explanation of code above:
/** To creat a user session => user needs to submit username and password
 * If credentials are valid, ie myusername and password matches => user granted access!
 * The server will create a temporary user session with a random string known as a session ID to identify that session.
 * The server will send a cookie to the client’s browser. The session ID is going to be placed inside this cookie.
 * if wrong credentials => user has no access to server, no session initalized and no cookies saved.
 */



//3. Logout page => localhost:3001/logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});







//SERVER START:
//===============================================
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
}); //we want our app to listen to a certain port during development but by default we will use 3001.


//since it is difficult to work with one huge server.js files full of routes, best practice is to divide up routes.
//we place all our routes = controllers in the folder ./controllers/api/index.js


//next to do is sessions:
