"use strict";

const router = require ("router") ();
const handler = require ("./teatchers/handler.js");


router. get ("/", (req, res) => {
  handler (req, res);
});


module. exports = () => router;
