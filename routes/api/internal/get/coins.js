"use strict";

const router = require ("router") ();
const handler = require ("./coins/handler.js");


router. get ("/", (req, res) => {
  handler (req, res);
});


module. exports = () => router;
