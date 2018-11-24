"use strict";

const router = require ("router") ();

router. use ("/header", require ("./get/header.js") ());
router. use ("/footer", require ("./get/footer.js") ());
router. use ("/teatchers", require ("./get/teatchers.js") ());
router. use ("/coins", require ("./get/coins.js") ());
router. use ("/gallery", require ("./get/gallery.js") ());
router. use ("/projects", require ("./get/projects.js") ());
router. use ("/main", require ("./get/main.js") ());


module. exports = () => router;
