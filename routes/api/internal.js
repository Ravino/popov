"use strict";

const router = require ("router") ();


router. use ("/get", require ("./internal/get.js") ());
router. use ("/post", require ("./internal/post.js") ());

module. exports = () => router;
