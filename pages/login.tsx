import * as React from "react";
import { useRouter } from "next/router";

function LoginPage() {
    const router = useRouter();
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const formRef = React.useRef<HTMLFormElement>(null);
    const [formError, setFormError] = React.useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        // Submit form
        setFormError("");
        router.push("/api/login");
    };

    const handleButtonClick = () => {
        router.push("/register");
    };

    return (
        <div className="grid place-items-center mt-20">
            <div className="bg-Black-Blue border-2 leading-9 w-80 h-120 px-2.5 rounded-md">
                <form ref={formRef} onSubmit={handleFormSubmit}>
                    <h1 className="text-center mt-5 text-xl font-semibold text-white">
                        {"Login"}
                    </h1>
                    <br />
                    <label className="text-white" htmlFor="email">
                        {"Email"}
                    </label>
                    <br />
                    <input
                        id="email"
                        className="w-full rounded"
                        type="text"
                        ref={emailRef}
                    />
                    <br />
                    <label className="text-white" htmlFor="password">
                        {"Password"}
                    </label>
                    <br />
                    <input
                        id="password"
                        className="w-full rounded"
                        type="password"
                        ref={passwordRef}
                    />
                    <br />
                    {formError && <p className="text-red-600">{formError}</p>}
                    <button
                        className="bg-white mx-auto my-4 border px-3.5 w-full rounded font-semibold text-Black-Blue"
                        type="submit"
                    >
                        {"LOGIN"}
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="border bg-red-300 rounded-md ">
                            {"Google"}
                        </button>
                        <button className="border bg-red-300  rounded-md ">
                            {"Facebook"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        onClick={handleButtonClick}
                        className=" text-white block  mb-2.5 mx-auto my-auto  "
                    >
                        {"Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
