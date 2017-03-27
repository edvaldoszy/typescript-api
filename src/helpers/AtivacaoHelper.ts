export default class AtivacaoHelper {

    private request;
    private response;

    private usuario;

    constructor(request, response) {
        this.request = request;
        this.response = response;

        this.usuario = request.usuario;
    }

    public iniciar() {
        console.log("Inciado processo de ativação");
    }
}
