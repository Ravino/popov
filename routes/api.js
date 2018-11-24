"use strict";

const router = require ("router") ();

router. use  ("/internal", require ("./api/internal.js") ());

module. exports = () => router;
