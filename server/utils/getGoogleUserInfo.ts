import dotenv from "dotenv";
dotenv.config();

import axios, { AxiosResponse } from "axios";

export default async function (code: string, path: string) {
    let token_response: AxiosResponse<any, any> = await axios.post(
        "https://oauth2.googleapis.com/token",
        {
            code: code,
            client_id: process.env.client_id,
            client_secret: process.env.client_secret,
            redirect_uri: process.env.domain + path,
            grant_type: "authorization_code",
        },
        { validateStatus: () => true }
    );
    let user_info_response: AxiosResponse<global.GoogleUserInfo, any> = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token_response.data.access_token}`
    );

    return user_info_response.data;
}
