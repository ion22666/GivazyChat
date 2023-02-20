declare namespace global {
    type GoogleUserInfo = {
        id: string;
        email: string;
        verified_email: string;
        name: string;
        given_name: string;
        family_name: string;
        picture: string;
        locale: string;
    };
    interface User extends imp.Document {
        _id: any;
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

    interface Session extends mongoose.Document {
        _id: any;
        userId: string;
        createdAt: number;
        refreshLifetime(): Promomise<void>;
    }
}

