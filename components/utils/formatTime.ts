export const formatDate = (unixTime: number, options: { withTime?: boolean } = { withTime: true }) => {
    const now = new Date();
    const date = new Date(unixTime);
    const year = date.getFullYear();
    const month = date.toLocaleString("ro-RO", { month: "long" });
    const dayOfMonth = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Comparăm doar data și ora (fără secunde sau milisecunde)
    const nowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());

    if (nowWithoutTime.getTime() < dateWithoutTime.getTime()) {
        return `Astăzi la ${hours}:${minutes}`;
    } else if (nowWithoutTime.getTime() - dateWithoutTime.getTime() < 24 * 60 * 60 * 1000) {
        return `Ieri la ${hours}:${minutes}`;
    } else {
        return `${dayOfMonth} ${month} ${year} ${options.withTime ? `la ${hours}:${minutes}` : ""}`;
    }
};

export const formatAge = (unixTime: number) => {
    const now = Date.now();
    const differenceInMs = now - unixTime;

    if (differenceInMs < 0) {
        return "0 minute";
    } else if (differenceInMs < 60 * 60 * 1000) {
        const minutes = Math.floor(differenceInMs / (60 * 1000));
        return `${minutes} minute`;
    } else if (differenceInMs < 24 * 60 * 60 * 1000) {
        const hours = Math.floor(differenceInMs / (60 * 60 * 1000));
        return `${hours} ore`;
    } else if (differenceInMs < 30 * 24 * 60 * 60 * 1000) {
        const days = Math.floor(differenceInMs / (24 * 60 * 60 * 1000));
        return `${days} zile`;
    } else if (differenceInMs < 365 * 24 * 60 * 60 * 1000) {
        const months = Math.floor(differenceInMs / (30 * 24 * 60 * 60 * 1000));
        return `${months} luni`;
    } else {
        const years = Math.floor(differenceInMs / (365 * 24 * 60 * 60 * 1000));
        return `${years} ani`;
    }
};
