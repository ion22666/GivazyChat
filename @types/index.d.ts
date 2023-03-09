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
        friends: { friendId: string; chatId: string }[];
        pedingFriends: { friendId: string }[];
        oauth?: {
            google?: GoogleUserInfo;
            microsoft?: {
                email: string;
                profile: string;
            };
        };

        createJWT(): string;
        getChatsIds(): Promise<string[]>;
    }

    interface UserData extends User {
        isOnline?: boolean;
    }

    interface JWT {
        sub: string;
        exp?: number;
    }

    interface PartialMessage {
        content: string;
    }

    interface Message {
        sender: string;
        sendAt: number;
        content: string;
    }
    interface Chat {
        _id: string;
        participants: string[] | Types.ObjectId[];
        messages: Message[];
        pushMessage(message: Message): Promise<void>;
    }
}

declare namespace Express {
    interface Request {
        user: global.User;
    }
}

interface Window {
    token: string | undefined;
    request: typeof fetch;
    getGoogleRedirectLink(path: stirng): string;
}
