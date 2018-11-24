"use strict";

const router = require ("router") ();


router. use ("/add", require ("./teatchers/add.js") ());
router. use ("/del", require ("./teatchers/del.js") ());


module. exports = () => router;
