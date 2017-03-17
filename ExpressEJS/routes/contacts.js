var express = require('express');
const Contact = require('../models/contact');
var router = express.Router();

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: 987
}];

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  Contact.find()
    .then((contacts) => {
      res.render('contacts/list', {contacts});
    })
    .catch(next);
});

router.get('/ajouter', function(req, res, next) {
  res.render('contacts/add');
});

router.post('/ajouter', function(req, res, next) {
  let contact = new Contact(req.body);
  contact.save()
    .then((contact) => {
      res.redirect('/contacts/' + contact._id);
    })
    .catch(next);
});

// Créer les pages /societes liste et details
// Faire le formulaire de modification de contacts
// A mi chemin entre details (<input value="ancienne valeur">)
// et ajouter (findByIdAndUpdate)

/* GET contacts details. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;

  Contact.findById(id)
    .then((contact) => {
      res.render('contacts/show', {contact});
    })
    .catch(next);
});

/* Supprimer un contact */
router.get('/:id/delete', function(req, res, next) {
  const id = req.params.id;

  Contact.findByIdAndRemove(id)
    .then((contact) => {
      res.redirect('/contacts');
    })
    .catch(next);
});


router.get('/:id/update', function(req, res, next) {
  const id = req.params.id;

  Contact.findById(id)
    .then((contact) => {
      res.render('contacts/update', {contact});
    })
    .catch(next);
});

router.post('/:id/update', function(req, res, next) {
  const id = req.params.id;

  Contact.findByIdAndUpdate(id, req.body)
    .then((contact) => {
      res.redirect('/contacts/' + contact._id);
    })
    .catch(next);
});

module.exports = router;
