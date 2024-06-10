export class Login {
    static logado = false;
    static matlogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static endpoint = `https://ca635693-7f36-4301-bc43-3f2f66412c27-00-3qnwhri6mzili.worf.replit.dev/`;

    static Login = (matlogado, acessoLogado) => {
        try {
            this.endpoint += `?matricula=${matlogado}&senha=${acessoLogado}`
            const res = fetch(this.endpoint)
                .then(res => res.json())
                .then((res) => {
                    if (res) {
                        console.log(res);
                        this.nomeLogado = res.nome;
                        this.matlogado = matlogado;
                        this.acessoLogado = acessoLogado;
                        this.logado = true;
                        console.log(this.nomeLogado, this.acessoLogado, this.logado);
                    }
                })
        } catch (err) {
            console.log("Erro na requisição" + err);
        }
    }
}


