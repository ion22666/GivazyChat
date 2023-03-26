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
        id: string;
        _id: string;
        email?: string;
        username?: string;
        password?: string;
        picture?: string;
        friends: { friendId: string; chatId: string }[];
        receivedFriendRequests: { userId: string; receivedAt: number }[];
        sentFriendRequests: { userId: string; sentAt: number }[];
        oauth?: {
            google?: GoogleUserInfo;
            microsoft?: {
                email: string;
                profile: string;
            };
        };

        createJWT(): string;
        getChatsIds(): Promise<string[]>;
        updateSelf(): Promise<void>;
        currentUser(): CurrentUser;
        friendData(currentUserId: { currentUserId: string }): FriendData;
        friendData(chatId: { chatId: string }): FriendData;
        userData(): UserData;
    }

    interface UserData {
        id: stirng;
        email?: string;
        username?: string;
        picture?: string;
    }

    interface FriendData extends UserData {
        chatId: string;
    }

    interface CurrentUser extends UserData {
        oauth?: {
            google?: GoogleUserInfo;
            microsoft?: {
                email: string;
                profile: string;
            };
        };
    }

    interface receivedFriendRequests {
        friendData: UserData;
        receivedAt: number;
    }
    interface sentFriendRequests {
        friendData: UserData;
        sendAt: number;
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
        id: string;
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
