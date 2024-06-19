import { config } from "./config.js";
import { Caixa } from "./CaixaDeMensagem/caixaPersReutilizavel/caixa.js";

let tipo = [];
let executarSim = () => {
    console.log("OK");
}

let callbackOk = () => {
    const configuracao = { // CONFIG QUE VAI COMO PARAMETRO PARA A MÉTODO DE CONFIGURAÇÃO
        cor: "#090",
        tipo: "ok",
        comando: null
    }
    Caixa.mostrar(configuracao, "Logado", "Bem-Vindo!");
}

let callbackNaoOk = () => {
    tipo = ["SIM", "NÃO"];
    const configuracao = { // CONFIG QUE VAI COMO PARAMETRO PARA A MÉTODO DE CONFIGURAÇÃO
        cor: "#f00",
        tipo: tipo,
        comando: () => { }
    }
    configuracao.comando = () => { executarSim() };
    Caixa.mostrar(configuracao, "Erro", "Usuário inválido!");
}



Login.Login(callbackOk, callbackNaoOk, config);
let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", (evt) => {
    let nome = document.getElementById("f_username").value;
    let acessoLogado = document.getElementById("f_senha").value;
    Login.pegarDados(nome, acessoLogado);
});









