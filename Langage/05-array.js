const nbs = [14, 45, 74];

var sum = nbs.reduce(function(acc, nb) {
    return acc + nb;
}, 0);

console.log(sum); // 133

/*
acc: 0, nb: 14
acc: 14, nb: 45
acc: 59, nb: 74
sum: 133
*/

var retourServeur = [{
    address: {
        coords: {
            lat: 45
        }
    }
},
{
    address: {
        coords: {
            lat: 23
        }
    }
}]

var lats = retourServeur.map(function transform(obj) {
    return obj.address.coords.lat;
});

console.log(lats.join(', '));