module. exports = () => {

  return {
    "routes": [
      { "path": "/", "redirect": "/main", },
      { "path": "/main", "component": require ("./components/main.vue"). default, },
      { "path": "/teatchers", "component": require ("./components/teatchers.vue"). default, },
      { "path": "/gallery", "component": require ("./components/gallery.vue"). default, },
      { "path": "/coins", "component": require ("./components/coins.vue"). default, },
      { "path": "/projects", "component": require ("./components/projects.vue"). default, },
      { "path": "/achievements", "component": require ("./components/achievements.vue"). default, },
      { "path": "/address", "component": require ("./components/address.vue"). default, },
    ],
  };

};
