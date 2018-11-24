"use strict";


const path = require ("path");

const app = require ("express") ();


const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser");
const fileUpload = require ("express-fileupload");
const serveStatic = require ("serve-static");
const DB = require ("node-json-db");


global. db = new DB ("./db/db", true, false);




const router = require ("./routes.js");


app. use (cookieParser ());
app. use (bodyParser. json ());
app. use (bodyParser. urlencoded ({ "extended": true }));
app. use (fileUpload ());
app. use (serveStatic (path. resolve ("./static")));





app. use (router ());

app. listen (3000);
