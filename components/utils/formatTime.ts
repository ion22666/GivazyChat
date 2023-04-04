export const formatDate = (unixTime: number) => {
    const now = Date.now();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor((now - unixTime) / millisecondsPerDay);

    const date = new Date(unixTime);
    const year = date.getFullYear();
    const month = date.toLocaleString("ro-RO", { month: "long" });
    const dayOfMonth = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    if (differenceInDays === 0) {
        return `Astăzi la ${hours}:${minutes}`;
    } else if (differenceInDays === 1) {
        return `Ieri la ${hours}:${minutes}`;
    } else {
        return `${dayOfMonth} ${month} ${year} la ${hours}:${minutes}`;
    }
};
