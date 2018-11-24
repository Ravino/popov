"use strict";

module. exports = (req, res) => {

  try {
    const teatchers = global. db. getData ("/teatchers");
    res. json (teatchers);
    return true;
  }

  catch (err) {
    res. json ([]);
    return false;
  }
  return undefined;
};
