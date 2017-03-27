var fetch = require("node-fetch");
var assert = require("assert");

it("#Listagem de produtos", function(done) {
    fetch("http://localhost:3000/usuarios")
    .then((response) => response.json())
    .then((json) => {
        assert.notEqual(json.message, "ERR");
        done();
    })
    .catch(done);
});
