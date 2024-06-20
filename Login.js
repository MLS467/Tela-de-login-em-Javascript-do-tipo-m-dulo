class Login {
    static logado = false;
    static matlogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static callbackOk = null
    static callbackNaoOk = null;
    static config = null;
    static estilo = null;
    static destino = null;
    static endpoint = null;
    static Login = (callbackOk, callbackNaoOk, config = null) => {
        this.endpoint = config.endpoint;
        this.callbackOk = callbackOk;
        this.callbackNaoOk = callbackNaoOk;
        if (config) {
            this.config = config;
        } else {
            this.config = {
                cor: '#ccc',
            }
        }
        this.estilo = document.createElement("style");
        this.estilo.innerHTML =
            `
            * {box-sizing: border-box; margin: 0; padding: 0; }
            #fundoLogin { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.7); }
            #baseLogin { display: flex; justify-content: center; align-items: stretch; width: inherit; }
            #elementosLogin { background-color:${this.config.cor}; display: flex; justify-content: center; align-items: inherit; flex-direction: column; padding: 15px; width: 30%; border-top-left-radius: 5px; border-bottom-left-radius: 5px; }
            .camposLogin { margin-bottom: 25px; display: flex; justify-content: center; align-items: start; flex-direction: column; width: 100%; }
            .camposLogin input { padding: 5px; width: 100%; border-radius: 5px; border: 1px solid #eee; background-color: #fff; }
            #logoLogin { border-top-right-radius: 5px; border-bottom-right-radius: 5px; display: flex; justify-content: center; align-items: stretch; height:inherit }
            #logoLogin img { background-color:white;border-top-right-radius: inherit; border-bottom-right-radius: inherit; width: 100%; height: inherit; display:flex; justify-content: center; align-items: center;}
            .botoesLogin { width: 100%; display: flex; justify-content: center; align-items: center; }
            .botoesLogin button { margin-left: 15px; width: 30%; height: 40px; border: none; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer; font-size: 15px; }
            `;

        const body = document.body;
        const fundoLogin = document.createElement('div');
        fundoLogin.setAttribute('id', 'fundoLogin');
        fundoLogin.setAttribute('class', 'fundoLogin');

        const baseLogin = document.createElement('div');
        baseLogin.setAttribute('id', 'baseLogin');
        baseLogin.setAttribute('class', 'baseLogin');
        fundoLogin.prepend(baseLogin);

        const elementosLogin = document.createElement('div');
        elementosLogin.setAttribute('id', 'elementosLogin');
        elementosLogin.setAttribute('class', 'elementosLogin');
        baseLogin.appendChild(elementosLogin);

        const camposLoginName = document.createElement('div');
        camposLoginName.setAttribute('class', 'camposLogin');
        elementosLogin.appendChild(camposLoginName);

        const labelName = document.createElement('label');
        labelName.innerHTML = 'Username';
        camposLoginName.appendChild(labelName);

        const inputUsername = document.createElement('input');
        inputUsername.setAttribute('type', 'text');
        inputUsername.setAttribute('id', 'f_username');
        inputUsername.setAttribute('name', 'f_username');
        camposLoginName.appendChild(inputUsername);
        elementosLogin.prepend(camposLoginName);

        const camposLoginSenha = document.createElement('div');
        camposLoginSenha.setAttribute('class', 'camposLogin');
        const labelSenha = document.createElement('label');
        labelSenha.innerHTML = 'Senha';
        camposLoginSenha.appendChild(labelSenha);
        const inputUserSenha = document.createElement('input');
        inputUserSenha.setAttribute('type', 'password');
        inputUserSenha.setAttribute('id', 'f_senha');
        inputUserSenha.setAttribute('name', 'f_senha');
        camposLoginSenha.appendChild(inputUserSenha);
        elementosLogin.appendChild(camposLoginSenha);


        const botoesLogin = document.createElement('div');
        botoesLogin.setAttribute('class', 'botoesLogin')

        const btnLogin = document.createElement('button');
        btnLogin.setAttribute('id', 'btnLogin')
        btnLogin.innerHTML = "Login";
        botoesLogin.appendChild(btnLogin);

        const btnCancelar = document.createElement('button');
        btnCancelar.setAttribute('id', 'cancelarLogin')
        btnCancelar.innerHTML = "Cancelar";
        btnCancelar.addEventListener('click', (evt) => { this.ocultar() });
        botoesLogin.appendChild(btnCancelar);
        elementosLogin.appendChild(botoesLogin);

        const img = document.createElement("img");
        img.setAttribute("src", this.config.img);
        img.setAttribute("alt", "#");
        img.setAttribute("title", "CFBCursos");
        const imgLogo = document.createElement("div");
        imgLogo.setAttribute("id", "logoLogin");
        imgLogo.setAttribute("class", "logoLogin");
        imgLogo.appendChild(img);
        baseLogin.appendChild(imgLogo);



        body.appendChild(fundoLogin);
        document.head.appendChild(this.estilo);

    }

    static pegarDados = (matlogado, acessoLogado) => {
        try {
            this.endpoint += `?matricula=${matlogado}&senha=${acessoLogado}`
            fetch(this.endpoint)
                .then(res => res.json())
                .then((res) => {
                    if (res.logado) {
                        sessionStorage("nomeLogado", res.nome)
                        sessionStorage("acessoLogado", res.senha)
                        sessionStorage("logado ", res.logado)

                        this.mostraDados();
                        this.callbackOk();

                    } else if (!res.logado) {
                        sessionStorage("nomeLogado", null);
                        sessionStorage("acessoLogado", null);
                        sessionStorage("logado ", res.logado);

                        this.callbackNaoOk();
                    }

                    this.ocultar();
                })
        } catch (err) {
            console.log("Erro na requisição" + err);
        }
    }

    static ocultar = () => {
        const tela = document.getElementById("fundoLogin");
        this.estilo.remove();
        tela.remove();
    }

    static mostraDados = () => {
        console.log(
            `
            Nome: ${this.nomeLogado}
            Acesso: ${this.acessoLogado}
            Matricula: ${this.matlogado}
            Logado: ${this.logado}
            `
        )
    }
}

// export {Login}

