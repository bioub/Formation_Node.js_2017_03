var express = require('express');
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
  res.render('contacts/list', {contacts: contacts});
});

/* GET contacts details. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;

  let contact = contacts.find((contact) => contact.id === Number(id));

  if (!contact) {
    req.notFoundReason = 'Contact not found';
    return next();
  }

  res.render('contacts/show', {contact: contact});
});

/* Supprimer un contact */
router.get('/:id/delete', function(req, res, next) {
  const id = req.params.id;

  let contact = 'à rechercher dans le tableau';
  // à supprimer

  res.render('contacts/deleteConfirmation', {contact: contact});
});

// TODO enregistrer ces routes dans app.js (idem users)

module.exports = router;
