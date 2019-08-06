var express = require('express');
var path = require('path');
var config = require('../../config/web');

exports = module.exports.getRoutes = function (){

  var router = express.Router();

  router.get('/', function(req, res){
      res.json({groups: config.groups});
  });

  return router;
};
