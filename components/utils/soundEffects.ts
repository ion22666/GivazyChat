const playSound = (file: string) => {
    return () => {
        try {
            const audio = new Audio(file);
            audio.play();
        } catch (e) {}
    };
};

export const soundEffect1 = playSound("/audio/mixkit-gaming-lock-2848.mp3");
export const soundEffect2 = playSound("/audio/mixkit-pebbles-click-1128.wav");
export const soundEffect3 = playSound("/audio/mixkit-plastic-bubble-click-1124.wav");
export const soundEffect4 = playSound("/audio/mixkit-pebbles-click-1128.wav");
