"use strict";

const router = require ("router") ();


router. use ("/add", require ("./gallery/add.js") ());
router. use ("/del", require ("./gallery/del.js") ());


module. exports = () => router;
