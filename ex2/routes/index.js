var express = require('express');
var router = express.Router();
var env = require('../config/env')
var axios = require('axios')

/* GET home page. */
router.get('/', function (req, res, next) {
  data = new Date().toISOString().substring(0, 19)
  axios.get(env.apiAccessPoint + "/plantas")
    .then(response => {
      res.render('index', { plantas: response.data, d: data })
    })
    .catch(err => { res.render('error', { error: err }) })

});

router.get('/:id', function (req, res, next) {
  data = new Date().toISOString().substring(0, 19)
  axios.get(env.apiAccessPoint + "/plantas/" + req.params.id )
    .then(response => {
      res.render('planta', { p: response.data, d: data })
    })
    .catch(err => { res.render('error', { error: err }) })

});
module.exports = router;
