/** @type {import('mongoose').QueryWithHelpers} */

declare namespace global {
    interface GoogleUserInfo {
        id: string;
        email: string;
        verified_email: string;
        name: string;
        given_name: string;
        family_name: string;
        picture: string;
        locale: string;
    }
    interface User {
        _id: stirng;
        email?: string;
        username?: string;
        password?: string;
        picture?: string;
        oauth?: {
            google?: GoogleUserInfo;
            microsoft?: {
                email: string;
                profile: string;
            };
        };

        createJWT(): string;
    }

    interface UserData extends User {}

    interface Session {
        userId: string;
        createdAt: number;
        refreshLifetime(): Promomise<void>;
    }
    interface JWT {
        sub: string;
        exp?: number;
    }

    interface Message {
        sendAt: number;
        content: string;
    }
    interface Chat {
        participants: string[] | Types.ObjectId[];
        messages: Message[];
    }
}

declare namespace Express {
    interface Request {
        user: global.User & QueryWithHelpers;
    }
}

interface Window {
    token: string | undefined;
    request: typeof fetch;
    getGoogleRedirectLink(path: stirng): string;
}
