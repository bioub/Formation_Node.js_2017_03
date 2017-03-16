const http = require('http');
const Router = require('./router')

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
router.addRoute('/contacts', (req, res) => {
    let html = `
    <p>Liste des contact :</p>
    <table>
    `;

    contacts.forEach(function(contact) {
        html += `
    <tr>
        <td>${contact.prenom}</td>
        <td>${contact.nom}</td>
    </tr>
    `;
    })

    html += '</table>';
    res.end(html);
});

router.addRoute('/contacts/123', (req, res) => {
    const contact = contacts.find((contact) => contact.id === 123);

    const html = `
    <p>Prénom : ${contact.prenom}</p>
    <p>Nom : ${contact.nom}</p>
    `;

    res.end(html);
});

const server = http.createServer((req, res) => {
    router.dispatch(req, res);
});

server.listen(8080, () => {
    console.log('Server started');
});

// Développer 2 pages
// /contacts <table>...</table>
// /contacts/123 <p>Prénom : Jean</p>