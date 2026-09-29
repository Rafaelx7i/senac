const notificacoes = [
    "Currículo enviado para Empresa XYZ.",
    "Seu currículo foi visualizado.",
    "Entrevista marcada para 25/06 às 14h."
];

const btn = document.getElementById("notificationBtn");
const panel = document.getElementById("notificationPanel");
const contador = document.getElementById("notificationCount");

// Atualiza contador
contador.textContent = notificacoes.length;

// Cria notificações
notificacoes.forEach(texto => {

    const item = document.createElement("div");

    item.classList.add("notification-item");

    item.textContent = texto;

    panel.appendChild(item);

});

// Abrir e fechar ao clicar no sino
btn.addEventListener("click", (event) => {

    event.stopPropagation();

    panel.classList.toggle("active");

});

// Impede fechar ao clicar dentro do painel
panel.addEventListener("click", (event) => {

    event.stopPropagation();

});

// Fecha ao clicar fora
document.addEventListener("click", () => {

    panel.classList.remove("active");

});