"use strict";

const fs = require ("fs");
const crypto = require ("crypto");
const path = require ("path");

const hsc = require ("htmlspecialchars");
const trim = require ("trim");
const fileType = require ("file-type");


const pathPhoto = "static/img/photo/";
const pathurl = "/img/photo/";



module. exports = (req, res) => {

  let photo = req. files. photo;

  let text = hsc (req. body. text);
  text = trim (text);


  const detectPhoto = fileType (photo. data);


  const nameFile = crypto. createHash ("md5"). update (Math. random () + "hmr"). digest ("hex");
  const allPath = path. resolve (pathPhoto + nameFile + "." + detectPhoto. ext);
  const photourl = pathurl + nameFile + "." + detectPhoto. ext;


  fs. writeFile (allPath, photo. data, (err) => {
    if (err) {
      console. log (err);
      return err;
    }


    const teatcher = {
      "photourl": photourl,
      "info": text,
    };


    global. db. push ("/teatchers[]", teatcher);


    res. json (teatcher);

    photo = null;

    return true;
  });


  return undefined;
};
