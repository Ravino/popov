"use strict";

const router = require ("router") ();
const handler = require ("./footer/handler.js");


router. post ("/", (req, res) => {
  handler (req, res);
});


module. exports = () => router;
