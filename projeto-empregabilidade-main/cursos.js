// Pega o jovem cadastrado

let jovem =
    JSON.parse(localStorage.getItem("jovem"));


// Se não existir cadastro,
// começa com 0 pontos

let pontos = jovem
    ? jovem.pontos
    : 0;


// Atualiza a tela

atualizarTela();


function concluirCurso(nome, pontosGanhos) {

    pontos += pontosGanhos;


    // Atualiza o cadastro do jovem

    if (jovem) {

        jovem.pontos = pontos;

        jovem.nivel = calcularNivel(pontos);

        localStorage.setItem(
            "jovem",
            JSON.stringify(jovem)
        );

    }


    // Salva os pontos

    localStorage.setItem(
        "pontos",
        pontos
    );


    alert(
        "Parabéns!\n\n" +
        "Você concluiu/avançou no curso " +
        nome +
        " e ganhou " +
        pontosGanhos +
        " XP!"
    );


    atualizarTela();

}


function calcularNivel(pontos) {

    if (pontos >= 800) {
        return 5;
    }

    if (pontos >= 500) {
        return 4;
    }

    if (pontos >= 300) {
        return 3;
    }

    if (pontos >= 100) {
        return 2;
    }

    return 1;
}


function atualizarTela() {

    const nivel =
        calcularNivel(pontos);


    const pontosElement =
        document.getElementById("pontosAtual");


    const barra =
        document.getElementById("barraNivel");


    const texto =
        document.getElementById("textoNivel");


    if (pontosElement) {

        pontosElement.textContent =
            pontos + " pontos";

    }


    if (nivel === 1) {

        barra.style.width =
            pontos + "%";

        texto.textContent =
            pontos +
            " / 100 pontos para o próximo nível";

    }

    else if (nivel === 2) {

        let progresso =
            ((pontos - 100) / 200) * 100;

        barra.style.width =
            Math.min(progresso, 100) + "%";

        texto.textContent =
            pontos +
            " pontos - Nível 2";

    }

    else if (nivel === 3) {

        let progresso =
            ((pontos - 300) / 200) * 100;

        barra.style.width =
            Math.min(progresso, 100) + "%";

        texto.textContent =
            pontos +
            " pontos - Nível 3";

    }

    else {

        barra.style.width = "100%";

        texto.textContent =
            pontos +
            " pontos";

    }


    const nivelElement =
        document.querySelector(".nivel-card h2");


    if (nivelElement) {

        nivelElement.textContent =
            "Nível " +
            nivel +
            " - " +
            nomeNivel(nivel);

    }

}


function nomeNivel(nivel) {

    const nomes = {

        1: "Iniciante",

        2: "Aprendiz",

        3: "Explorador",

        4: "Profissional",

        5: "Especialista"

    };


    return nomes[nivel];

}


function resgatar(valor) {

    if (pontos >= valor) {

        pontos -= valor;


        if (jovem) {

            jovem.pontos = pontos;

            jovem.nivel =
                calcularNivel(pontos);

            localStorage.setItem(
                "jovem",
                JSON.stringify(jovem)
            );

        }


        localStorage.setItem(
            "pontos",
            pontos
        );


        alert(
            "Recompensa resgatada com sucesso!"
        );


        atualizarTela();

    }

    else {

        alert(
            "Você ainda não possui pontos suficientes."
        );

    }

}
