const YAML = require('yaml');

var express = require('express');
var router = express.Router();

const obj = { title: 'Express modificado' };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/ajaxhtml', function(req, res, next) {
  res.render('ajaxhtml', { title: 'Express' });
});

/* GET home page. */
router.get('/json', function(req, res, next) {
  // res.type('application/x-yaml')
  res.type('json').send(obj);
});

/* GET home page. */
router.get('/jsonfake', function(req, res, next) {
  // res.type('application/x-yaml')
  res.send(JSON.stringify(obj));
});

/* GET home page. */
router.get('/yaml', function(req, res, next) {
  // res.type('application/x-yaml')
  res.type('yaml').send(YAML.stringify(obj));
});

/* GET home page. */
router.get('/txt', function(req, res, next) {
  res.type(`txt`).send(`o titulo é express`);
});

module.exports = router;
