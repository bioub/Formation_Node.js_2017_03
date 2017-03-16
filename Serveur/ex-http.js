const contacts = [{
    prenom: 'Jean',
    nom: 'Dupont',
    id: 123
}, {
    prenom: 'Eric',
    nom: 'Martin',
    id: 987
}];

const router = new Router();
router.addRoute('/contacts', contactList);
router.addRoute('/contacts/123', contactDetails);

http.createServer((req, res) => {
    router.dispatch(req, res);
});

// Développer 2 pages
// /contacts <table>...</table>
// /contacts/123 <p>Prénom : Jean</p>