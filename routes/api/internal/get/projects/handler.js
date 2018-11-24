"use strict";

module. exports = (req, res) => {

  try {
    const projects = global. db. getData ("/projects");
    res. json (projects);
    return true;
  }

  catch (err) {
    res. json ("not-found");
    return false;
  }
  return undefined;
};
