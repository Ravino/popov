"use strict";

const path = require ("path");

const router = require ("router") ();

router. get ("/", (req, res) => {

  if (req. query. admin) {
    res. sendFile (path. resolve ("./static/private/index.htm"));
    return true;
  }


  res. sendFile (path. resolve ("./static/public/index.htm"));
});



router. use ("/api", require ("./routes/api.js") ());

module. exports = () => router;
