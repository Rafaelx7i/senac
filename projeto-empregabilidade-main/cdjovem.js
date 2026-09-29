document
    .getElementById("formJovem")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const email =
            document.getElementById("email").value;

        const telefone =
            document.getElementById("telefone").value;

        const escolaridade =
            document.getElementById("escolaridade").value;

        const sobre =
            document.getElementById("sobre").value;


        const jovem = {

            nome: nome,

            email: email,

            telefone: telefone,

            escolaridade: escolaridade,

            sobre: sobre,

            pontos: 0,

            nivel: 1

        };


        localStorage.setItem(
            "jovem",
            JSON.stringify(jovem)
        );


        // Redireciona para os cursos

        window.location.href =
            "cursos.html";

    });
