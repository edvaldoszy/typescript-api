import AutenticacaoMiddleware = require("../middlewares/AutenticacaoMiddleware");
import UsuarioController = require("../controllers/UsuarioController");

export = function(app) {

    app.route("/usuarios")
        .get(
            AutenticacaoMiddleware.autenticar,
            UsuarioController.listar
        )
        .post(
            AutenticacaoMiddleware.autenticar,
            UsuarioController.cadastrar
        );
    
    app.route("/usuarios/autenticar")
        .post(UsuarioController.autenticar);
}
