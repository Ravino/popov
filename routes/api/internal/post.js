"use strict";

const router = require ("router") ();

router. use ("/header", require ("./post/header.js") ());
router. use ("/footer", require ("./post/footer.js") ());
router. use ("/teatchers", require ("./post/teatchers.js") ());
router. use ("/coins", require ("./post/coins.js") ());
router. use ("/gallery", require ("./post/gallery.js") ());
router. use ("/projects", require ("./post/projects.js") ());
router. use ("/main", require ("./post/main.js") ());


module. exports = () => router;
