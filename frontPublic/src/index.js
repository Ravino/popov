const Vue = require ("vue");
const Vuex = require ("vuex");
const VueRouter = require ("vue-router");

const axios = require ("axios");
const twoGis = require ("2gis-maps");


const index = require ("./index.vue"). default;
const configRouter = require ("./configRouter.js");


Vue. config. debug = true;
Vue. config. devtools = true;


Vue. use (VueRouter);
Vue. use (Vuex);

Vue. prototype. $http = axios;
Vue. prototype. $twoGis = twoGis;


const router = new VueRouter (configRouter ());


(new Vue ({
  "el": ".page",
  "router": router,
  "render": h => h (index),
}));
