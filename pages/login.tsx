import * as React from "react";
import { useRouter } from "next/router";

const google_oauth_redirect_url =
    `https://accounts.google.com/o/oauth2/auth?` +
    `client_id=${process.env.client_id}` +
    `&redirect_uri=${process.env.redirect_uri}` +
    `&response_type=${"code"}` +
    `&scope=${"email%20profile"}`;


function LoginPage() {
    const router = useRouter();
    const [formError, setFormError] = React.useState("");
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!email) {
            setFormError("Email not provided");
            return;
        }
        if (!password) {
            setFormError("Password not provided");
            return;
        }
        const formData = new FormData();
        formData.append("email", event.currentTarget.email.value);
        formData.append("password", event.currentTarget.password.value);

        console.log("Form Data:", {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
        });

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                router.push("/");
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            console.error(error);
            setFormError("Invalid email or password");
        }
    };

    const handleButtonClick = () => {
        router.push("/register");
    };

    return (
        <div className="grid place-items-center mt-28">
            <div className="bg-neutral-800 border-2 leading-9 w-80 h-120 px-2.5 rounded-br-3xl rounded-tl-3xl ">
                <form
                    onSubmit={handleFormSubmit}
                    encType="application/x-www-form-urlencoded"
                >
                    <h1 className="text-center mt-7 text-2xl font-semibold text-white underline decoration-Verde">
                        {"Login"}
                    </h1>

                    <br />
                    
                    <label className="text-white" htmlFor="email">
                        {""}
                    </label>
                    
                    <input
                        
                        placeholder="Email"
                        id="email"
                        className="w-full rounded mt-5"
                        type="email"
                        name="email"
                        ref={emailRef}
                    />
                    
                    <label className="text-white"  htmlFor="password">
                        {""}
                    </label>
                  
                    <input
                        placeholder="Password"
                        id="password"
                        className="w-full rounded mb-5 mt-5"
                        type="password"
                        name="password"
                        ref={passwordRef}
                    />
                    
                    {formError && <p className="text-red-600">{formError}</p>}
                    <button
                        className="bg-Verde mx-auto my-4 border px-3.5 w-full rounded font-semibold text-Black-Blue"
                        type="submit"
                        id="loginBtn"
                    >
                        {"LOGIN"}
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <a
                            href={google_oauth_redirect_url}
                            type="button"
                            className="text-center border bg-slate-100 rounded-md "
                            id="loginGoogleBtn"
                        >
                            {"Google"}
                        </a>
                        
                        <button
                            type="button"
                            className="border bg-slate-100 rounded-md text-center"
                            id="loginFacebookBtn"
                        >
                            {"Facebook"}
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className=" text-white block  mb-2.5 mx-auto my-auto  "
                        id="redirectRegisterBtn"
                    >
                        {"Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
