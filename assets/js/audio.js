document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const statusLabel = document.getElementById("statusLabel");
    const wave = document.querySelector(".sound-wave");
    const volumeControl = document.getElementById("volumeControl");
    const volumeValue = document.getElementById("volumeValue");

    if (!audio || !playBtn || !statusLabel || !wave) {
        return;
    }

    const setPlayingState = (isPlaying) => {
        playBtn.textContent = isPlaying ? "⏸" : "▶";
        playBtn.setAttribute("aria-label", isPlaying ? "Pausar rádio" : "Reproduzir rádio");
        statusLabel.textContent = isPlaying ? "Tocando agora" : "Ao vivo • toque para ouvir";
        wave.classList.toggle("is-playing", isPlaying);
    };

    playBtn.addEventListener("click", async () => {
        if (audio.paused) {
            try {
                await audio.play();
            } catch (error) {
                statusLabel.textContent = "Nao foi possivel iniciar o audio";
                setPlayingState(false);
            }
            return;
        }

        audio.pause();
    });

    audio.addEventListener("play", () => setPlayingState(true));
    audio.addEventListener("pause", () => setPlayingState(false));
    audio.addEventListener("ended", () => setPlayingState(false));

    if (volumeControl) {
        audio.volume = Number(volumeControl.value);

        const syncVolumeUI = () => {
            if (!volumeValue) {
                return;
            }

            volumeValue.textContent = `${Math.round(audio.volume * 100)}%`;
        };

        volumeControl.addEventListener("input", () => {
            audio.volume = Number(volumeControl.value);
            syncVolumeUI();
        });

        syncVolumeUI();
    }

    setPlayingState(false);
});
