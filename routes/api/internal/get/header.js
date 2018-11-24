"use strict";

const router = require ("router") ();
const handler = require ("./header/handler.js");


router. get ("/", (req, res) => {
  handler (req, res);
});


module. exports = () => router;
