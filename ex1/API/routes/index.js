var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

// GET: os vários pedidos



router.get('/plantas', function (req, res, next) {
  if (req.query.especie)
  {
    especie = req.query.especie
    Planta.listQuery({Espécie: especie})
      .then(lista => {
        res.jsonp(lista)
      })
      .catch(erro => {
        res.jsonp({ error: erro, message: "Erro na obtenção da lista de plantas" })
      })
  }
  else if(req.query.implant)
  {
    implant = req.query.implant
    Planta.listQuery({Implantação: implant})
      .then(lista => {
        res.jsonp(lista)
      })
      .catch(erro => {
        res.jsonp({ error: erro, message: "Erro na obtenção da lista de plantas" })
      })
  }
  else{
    Planta.list()
      .then(lista => {
        res.jsonp(lista)
      })
      .catch(erro => {
        res.jsonp({ error: erro, message: "Erro na obtenção da lista de plantas" })
      })
  }
});

router.get('/plantas/freguesias', function (req, res) {
  Planta.getFreguesias()
    .then(pla => {
      res.jsonp(pla)
    })
    .catch(erro => {
      res.jsonp({ error: erro, message: "Erro na obtenção da lista de freguesias" })
    })
});


router.get('/plantas/especies', function (req, res) {
  Planta.getEspecies()
    .then(pla => {
      res.jsonp(pla)
    })
    .catch(erro => {
      res.jsonp({ error: erro, message: "Erro na obtenção da lista de espécies" })
    })
});

router.get('/plantas/:id', function (req, res) {
  Planta.getPlanta(req.params.id)
    .then(pla => {
      res.jsonp(pla)
    })
    .catch(erro => {
      res.jsonp({ error: erro, message: "Erro na obtenção da planta" })
    })
});


router.post('/plantas', function (req, res) {
  Planta.addPlanta(req.body)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro na inserção da planta" })
    })
})


router.delete('/plantas/:id', function (req, res) {
    Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', { error: erro, message: "Erro no delete" })
    })
})

module.exports = router;
