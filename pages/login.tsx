import * as React from "react";
import { useRouter } from "next/router";

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

    return (
        <div className="mt-28 grid place-items-center">
            <div className="h-120 w-80 rounded-br-3xl rounded-tl-3xl border-2 bg-neutral-800 px-2.5 leading-9 ">
                <form onSubmit={handleFormSubmit} encType="application/x-www-form-urlencoded">
                    <h1 className="mt-7 text-center text-2xl font-semibold text-white underline decoration-Verde">{"Login"}</h1>

                    <br />

                    <label className="text-white" htmlFor="email">
                        {""}
                    </label>

                    <input placeholder="Email" id="email" className="mb-5 mt-5 w-full rounded-lg text-center" type="email" name="email" ref={emailRef} />

                    <label className="text-white" htmlFor="password">
                        {""}
                    </label>

                    <input placeholder="Password" id="password" className="mb-5 mt-2 w-full rounded-lg text-center" type="password" name="password" ref={passwordRef} />

                    {formError && <p className="text-red-600">{formError}</p>}
                    <button className="mx-auto mb-4 w-full rounded border bg-Verde px-3.5 font-semibold text-Black-Blue" type="submit" id="loginBtn">
                        {"LOGIN"}
                    </button>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <button
                            onClick={() => (window.location.href = window.getGoogleRedirectLink("/api/login/google"))}
                            type="button"
                            className="rounded-md border bg-slate-100 text-center "
                            id="loginGoogleBtn"
                        >
                            {"Google"}
                        </button>

                        <button type="button" className="rounded-md border bg-slate-100 text-center" id="loginFacebookBtn">
                            {"Facebook"}
                        </button>
                    </div>
                    <button type="button" onClick={handleButtonClick} className=" mx-auto my-auto  mb-2.5 block text-white  " id="redirectRegisterBtn">
                        {"Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
