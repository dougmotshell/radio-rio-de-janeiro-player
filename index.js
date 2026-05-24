document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const statusLabel = document.getElementById("statusLabel");
    const wave = document.querySelector(".sound-wave");

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
                setPlayingState(false);
            }
            return;
        }

        audio.pause();
    });

    audio.addEventListener("play", () => setPlayingState(true));
    audio.addEventListener("pause", () => setPlayingState(false));
    audio.addEventListener("ended", () => setPlayingState(false));

    setPlayingState(false);
});