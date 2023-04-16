import * as React from "react";
import { useRouter } from "next/router";
import GoogleIcon from "../components/svg/GoogleIcon";
import CaretRightEmptyFill from "../components/svg/CaretRightFill";

// traditional login/register
// 1. userul trimite credentialele la server ptrintrun fetch() request
// 2. serverul ii raspunde cu OK sau NOT OK
// 3. daca e NOT OK, serverul va transmite in response un mesaj de eroare -> afiseaza eraore la user in acest caz
// 4. daca e OK, serverul va transmite un JWT pe care userul trebe sa il salvezi in LocalStorage
//

function LoginPage() {
    const router = useRouter();
    const [formError, setFormError] = React.useState("");
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);

    function input_is_valid() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!email) {
            setFormError("Email not provided");
            return false;
        }
        if (!password) {
            setFormError("Password not provided");
            return false;
        }

        return true;
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        if (!input_is_valid()) return;

        const json_body = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
        };

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json_body),
            });

            if (!response.ok && setFormError("Login failed") === undefined) return;

            const json = await response.json();

            if (!json.token && alert("Serverul nu nea trimis nici un token") === undefined) return;

            localStorage.setItem("token", json.token);
            // dam render la home page, si acolo va fi un script care va apela api-ul pentru a extrage informatiile user-ului
            return router.push("/");
            // aici pagina login nu mai exista
        } catch (error) {
            console.error(error);
            setFormError("Invalid email or password");
        }
    };

    const handleButtonClick = () => {
        router.push("/register");
    };

    async function loginImmediately() {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "fakeemail@gmail.com", password: "8PH7rbciMay5TsH" }),
        });

        if (!response.ok && setFormError("Login failed") === undefined) return;

        const json = await response.json();

        if (!json.token && alert("Serverul nu nea trimis nici un token") === undefined) return;

        localStorage.setItem("token", json.token);
        // dam render la home page, si acolo va fi un script care va apela api-ul pentru a extrage informatiile user-ului
        return router.push("/");
    }

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="h-120 w-80 rounded-br-3xl rounded-tl-3xl border-2 bg-neutral-800 px-2.5 leading-9 ">
                    <form className="flex flex-col items-center gap-4 p-4" onSubmit={handleFormSubmit} encType="application/x-www-form-urlencoded">
                        <h1 className="mb-4 text-center text-2xl font-semibold text-white underline decoration-Verde">{"Login"}</h1>

                        <input placeholder="Email" id="email" className="w-full rounded-lg text-center" type="email" name="email" ref={emailRef} />

                        <input placeholder="Password" id="password" className=" w-full rounded-lg text-center" type="password" name="password" ref={passwordRef} />

                        {formError && <p className="text-red-600">{formError}</p>}
                        <button className="mb-4 w-full rounded border bg-Verde px-3.5 font-semibold text-Black-Blue" type="submit" id="loginBtn">
                            {"LOGIN"}
                        </button>

                        <button
                            onClick={() => (window.location.href = window.getGoogleRedirectLink("/api/login/google"))}
                            type="button"
                            className="flex w-fit items-center gap-1 rounded-md border bg-slate-100 p-1 text-center font-Whyte-Medium text-lg"
                            id="loginGoogleBtn"
                        >
                            <GoogleIcon className="aspect-square h-[1.2rem]" />
                            {"Log in with Google"}
                        </button>

                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="flex w-fit items-center gap-1 rounded-md border bg-white bg-opacity-25  p-1 text-center font-Whyte-Medium text-lg text-white duration-100 ease-linear hover:bg-opacity-50"
                            id="redirectRegisterBtn"
                        >
                            {"Register"}
                            <CaretRightEmptyFill className="aspect-square h-[1.2rem]" />
                        </button>

                        <button
                            onClick={loginImmediately}
                            type="button"
                            className="flex w-fit items-center gap-1 rounded-md border bg-Crimson p-1 text-center font-Whyte-Regular text-base"
                            id="loginGoogleBtn"
                        >
                            {"!!!click here to login immediately to an existing account!!!"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
