var fetch = require("node-fetch");
var assert = require("assert");

before(() => {
    // faz alguma coisa antes de iniciar os testes
});

beforeEach(() => {
    // faz alguma coisa antes de cada teste
});

describe("Cadastro de usuários", () => {
    it("#deve cadastrar um novo usuario", itCadastrarNovoUsuario);
    it("#deve autenticar o novo usuario", itAutenticarNovoUsuario);
    it("#deve alterar telefone do usuario", itAlterarTelefoneUsuario);
});

function itCadastrarNovoUsuario(done) {
    done();
}

function itAutenticarNovoUsuario(done) {
    done();
}

function itAlterarTelefoneUsuario(done) {
    done();
}
