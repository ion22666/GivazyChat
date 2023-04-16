import * as React from "react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import CaretRightEmptyFill from "../components/svg/CaretRightFill";
import GoogleIcon from "../components/svg/GoogleIcon";

function RegisterPage() {
    const router = useRouter();
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);

    const handleFormSubmit = async event => {
        event.preventDefault();

        const json_body = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
            confirmPassword: event.currentTarget.confirmPassword.value,
            username: event.currentTarget.username.value,
        };

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json_body),
            });

            if (!response.ok && alert("Register failed") === undefined) return;

            const json = await response.json();

            if (!json.token && alert("Serverul nu nea trimis nici un token") === undefined) return;

            localStorage.setItem("token", json.token);
            // dam render la home page, si acolo va fi un script care va apela api-ul pentru a extrage informatiile user-ului

            return router.push("/");
            // aici pagina login nu mai exista
        } catch (error) {
            console.error(error);
        }
    };

    const handleButtonClick = () => {
        router.push("/login");
    };

    const handleInputChange = () => {
        if (passwordRef.current.value === confirmPasswordRef.current.value) {
            setPasswordsMatch(true);
            setPasswordError(false);
        } else {
            setPasswordsMatch(false);
            setPasswordError(true);
        }

        if (passwordRef.current.value.length < 8) {
            setPasswordLengthError(true);
        } else {
            setPasswordLengthError(false);
        }
    };

    async function loginImmediately() {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: "fakeemail@gmail.com", password: "8PH7rbciMay5TsH" }),
        });

        if (!response.ok && alert("Login failed") === undefined) return;

        const json = await response.json();

        if (!json.token && alert("Serverul nu nea trimis nici un token") === undefined) return;

        localStorage.setItem("token", json.token);
        // dam render la home page, si acolo va fi un script care va apela api-ul pentru a extrage informatiile user-ului
        return router.push("/");
    }
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className=" mt-10 grid place-items-center">
                <div className=" h-120 w-80 rounded-md border-2  bg-neutral-800 px-2.5 leading-9 ">
                    <form className="flex flex-col items-center gap-4 p-4" onSubmit={handleFormSubmit} method="POST" encType="application/x-www-form-urlencoded">
                        <h1 className="mb-4 text-center text-xl  font-semibold text-white underline decoration-Verde  ">{"Register"}</h1>

                        <input className="w-full rounded text-center" type="email" required name="email" id="email" placeholder="Email" />

                        <input className="w-full rounded text-center" type="text" required name="username" id="username" placeholder="Username" />

                        <input
                            id="password"
                            name="password"
                            className="w-full rounded text-center"
                            type="password"
                            required
                            ref={passwordRef}
                            onChange={handleInputChange}
                            placeholder="Password"
                        />
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full rounded text-center"
                            type="password"
                            required
                            ref={confirmPasswordRef}
                            onChange={handleInputChange}
                            placeholder="Confirm Password"
                        />
                        <br />
                        {passwordLengthError && <p className="text-red-600">Parola trebuie sa fie de minim 8 caractere</p>}
                        {passwordError && <p className="text-red-600">Parolele nu coincid!</p>}
                        <button
                            id="btnRegister"
                            disabled={!passwordsMatch || passwordLengthError}
                            className="mx-auto mb-2 w-full rounded border bg-Verde px-3.5 font-semibold text-Black-Blue"
                            type="submit"
                        >
                            {"Register"}
                        </button>

                        <button
                            onClick={() => (window.location.href = window.getGoogleRedirectLink("/api/register/google"))}
                            type="button"
                            className="flex w-fit items-center gap-1 rounded-md border bg-slate-100 p-1 text-center font-Whyte-Medium text-lg"
                            id="loginGoogleBtn"
                        >
                            <GoogleIcon className="aspect-square h-[1.2rem]" />
                            {"Register with Google"}
                        </button>

                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="flex w-fit items-center gap-1 rounded-md border bg-white bg-opacity-25  p-1 text-center font-Whyte-Medium text-lg text-white duration-100 ease-linear hover:bg-opacity-50"
                            id="redirectRegisterBtn"
                        >
                            {"Login"}
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

export default RegisterPage;
