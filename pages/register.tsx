import * as React from "react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

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

    return (
        <div className=" mt-10 grid place-items-center">
            <div className=" h-120 w-80 rounded-md border-2  bg-neutral-800 px-2.5 leading-9 ">
                <form onSubmit={handleFormSubmit} method="POST" encType="application/x-www-form-urlencoded">
                    <h1 className="mt-5 text-center text-xl  font-semibold text-white underline decoration-Verde  ">{"Register"}</h1>

                    <br />
                    <label className="text-white" htmlFor="Email ">
                        {"Email"}
                    </label>
                    <br />
                    <input className="w-full rounded" type="email" required name="email" id="email" />
                    <br />
                    <label className="text-white" htmlFor=" username ">
                        {"Username"}
                    </label>
                    <br />
                    <input className="w-full rounded" type="text" required name="username" id="username" />
                    <br />
                    <label className="text-white" htmlFor="Password">
                        {"Password"}
                    </label>
                    <br />
                    <input id="password" name="password" className="w-full rounded" type="password" required ref={passwordRef} onChange={handleInputChange} />
                    <br />
                    <label className="text-white" htmlFor="password">
                        {"Confirm Password"}
                    </label>
                    <br />
                    <input id="confirmPassword" name="confirmPassword" className="w-full rounded" type="password" required ref={confirmPasswordRef} onChange={handleInputChange} />
                    <br />
                    {passwordLengthError && <p className="text-red-600">Parola trebuie sa fie de minim 8 caractere</p>}
                    {passwordError && <p className="text-red-600">Parolele nu coincid!</p>}
                    <button
                        id="btnRegister"
                        disabled={!passwordsMatch || passwordLengthError}
                        className="mx-auto my-5 w-full rounded border bg-Verde px-3.5 font-semibold text-Black-Blue"
                        type="submit"
                    >
                        {"Register"}
                    </button>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <button
                            onClick={() => (window.location.href = window.getGoogleRedirectLink("/api/register/google"))}
                            id="btnForGoogle"
                            className="rounded-md border bg-red-300 "
                            type="button"
                        >
                            {"Google"}
                        </button>
                        <button id="btnForFacebook" className="rounded-md border  bg-red-300 " type="button">
                            {"Facebook"}
                        </button>
                    </div>
                    <button id="btnToLogin" className=" mx-auto my-auto  mb-2.5 block text-white  " onClick={handleButtonClick} type="button">
                        {"Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
