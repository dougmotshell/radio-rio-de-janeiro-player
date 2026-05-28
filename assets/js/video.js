document.addEventListener("DOMContentLoaded", () => {
    const playerElement = document.getElementById("player");
    const statusLabel = document.getElementById("videoStatusLabel");

    if (!playerElement || !statusLabel) {
        return;
    }

    if (typeof Clappr === "undefined") {
        statusLabel.textContent = "Nao foi possivel carregar o player";
        return;
    }

    const streamingSource = playerElement.getAttribute("data-source");
    if (!streamingSource) {
        statusLabel.textContent = "Fonte de transmissao indisponivel";
        return;
    }

    const player = new Clappr.Player({
        parentId: "#player",
        source: streamingSource,
        autoPlay: true,
        mute: false,
        width: "100%",
        height: "100%"
    });

    const resizePlayer = () => {
        const frame = playerElement.parentElement;
        if (!frame) {
            return;
        }

        const newWidth = frame.clientWidth - 20;
        const newHeight = Math.round((newWidth * 9) / 16);
        player.resize({ width: newWidth, height: newHeight });
    };

    resizePlayer();
    window.addEventListener("resize", resizePlayer);

    statusLabel.textContent = "Ao vivo em video";

    player.on(Clappr.Events.PLAYER_PLAY, () => {
        statusLabel.textContent = "Ao vivo em video";
    });

    player.on(Clappr.Events.PLAYER_PAUSE, () => {
        statusLabel.textContent = "Video pausado";
    });

    player.on(Clappr.Events.PLAYER_ERROR, () => {
        statusLabel.textContent = "Falha na conexao. Atualize a pagina";
    });
});
