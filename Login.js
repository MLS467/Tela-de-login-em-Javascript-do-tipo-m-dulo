export class Login {
    static logado = false;
    static matlogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static estilo = null;
    static endpoint = `https://ca635693-7f36-4301-bc43-3f2f66412c27-00-3qnwhri6mzili.worf.replit.dev/`;

    static Login = (matlogado, acessoLogado) => {
        this.estilo = document.createElement("style");
        this.estilo.innerHTML =
            `
            * {box-sizing: border-box; margin: 0; padding: 0; }
            #fundoLogin { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.7); }
            #baseLogin { display: flex; justify-content: center; align-items: stretch; width: inherit; }
            #elementosLogin { background-color: #ccc; display: flex; justify-content: center; align-items: inherit; flex-direction: column; padding: 15px; width: 30%; border-top-left-radius: 5px; border-bottom-left-radius: 5px; }
            .camposLogin { margin-bottom: 25px; display: flex; justify-content: center; align-items: start; flex-direction: column; width: 100%; }
            .camposLogin input { padding: 5px; width: 100%; border-radius: 5px; border: 1px solid #eee; background-color: #fff; }
            #logoLogin { border-top-right-radius: 5px; border-bottom-right-radius: 5px; display: flex; justify-content: center; align-items: center; }
            #logoLogin img { border-top-right-radius: inherit; border-bottom-right-radius: inherit; width: 250px; height: inherit; }
            .botoesLogin { width: 100%; display: flex; justify-content: center; align-items: center; }
            .botoesLogin button { margin-left: 15px; width: 30%; height: 40px; border: none; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer; font-size: 15px; }
            `;

        document.head.appendChild(this.estilo);

        //                      API NÃO ESTÁ RODANDO
        // try {
        //     this.endpoint += `?matricula=${matlogado}&senha=${acessoLogado}`
        //     const res = fetch(this.endpoint)
        //         .then(res => res.json())
        //         .then((res) => {
        //             if (res) {
        //                 console.log(res);
        //                 this.nomeLogado = res.nome;
        //                 this.matlogado = matlogado;
        //                 this.acessoLogado = acessoLogado;
        //                 this.logado = true;
        //                 console.log(this.nomeLogado, this.acessoLogado, this.logado);
        //             }
        //         })
        // } catch (err) {
        //     console.log("Erro na requisição" + err);
        // }
    }
}


