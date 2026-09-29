function contatarJovem(nome) {

    const mensagem =
        "Olá " + nome +
        ", encontramos seu perfil no Conecta Futuro e gostaríamos de conversar sobre uma oportunidade.";

    alert(
        "Mensagem enviada para " +
        nome +
        "!\n\n" +
        mensagem
    );

    localStorage.setItem(
        "notificacao",
        "Uma empresa entrou em contato com você."
    );
}
