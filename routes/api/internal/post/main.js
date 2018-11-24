"use strict";

const router = require ("router") ();
const handler = require ("./main/handler.js");


router. post ("/", (req, res) => {
  handler (req, res);
});


module. exports = () => router;
