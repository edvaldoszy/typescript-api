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
    assert.equal(100, 100);
    done();
}

function itAutenticarNovoUsuario(done) {
    assert.notEqual(100, 200);
    done();
}

function itAlterarTelefoneUsuario(done) {
    assert.ok(true);
    done();
}
