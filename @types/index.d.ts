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
        email?: string;
        username?: string;
        password?: string;
        oauth?: {
            google?: GoogleUserInfo;
            microsoft?: {
                email: string;
                profile: string;
            };
        };

        clearSessions(): Promise<void>;
        createSession(): Promise<string>;
    }

    interface Session {
        userId: string;
        createdAt: number;
        refreshLifetime(): Promomise<void>;
    }

    interface Message {
        sendAt: number;
        content: string;
    }
    interface Chat {
        participants: string[];
        messages: Message[];
    }
}
