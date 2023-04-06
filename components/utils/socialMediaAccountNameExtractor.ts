export const socialMediaAccountNameExtractor = {
    instagram(link: string) {
        const regex = /instagram\.com\/([\w._]+)/i;
        const match = regex.exec(link);
        return match ? match[1] : null;
    },
    facebook(link: string) {
        // https://www.facebook.com/ion.mocanu.752861
        const regex = /facebook\.com\/([\w.-]+)/i;
        const match = regex.exec(link);
        return match ? match[1] : null;
    },
    reddit(link: string) {
        // https://www.reddit.com/user/ion2266
        const regex = /reddit\.com\/(?:user\/|u\/)?([\w-]+)/i;
        const match = regex.exec(link);
        return match ? match[1] : null;
    },
};
