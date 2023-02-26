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

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", event.currentTarget.email.value);
        formData.append("password", event.currentTarget.password.value);
        formData.append(
            "confirmPassword",
            event.currentTarget.confirmPassword.value
        );
        formData.append("username", event.currentTarget.username.value);

        console.log("Form Data:", {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value,
            confirmPassword: event.currentTarget.confirmPassword.value,
            username: event.currentTarget.username.value,
        });

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                router.push("/");
                console.log("OK RESPONSE");
            } else {
                throw new Error("Registration failed");
            }
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
        <div className=" grid place-items-center mt-10">
            <div className=" bg-Black-Blue border-2 leading-9 w-80  h-120 px-2.5 rounded-md ">
                <form
                    onSubmit={handleFormSubmit}
                    method="POST"
                    encType="application/x-www-form-urlencoded"
                >
                    <h1 className="text-center mt-5 text-xl  font-semibold text-white   ">
                        {"Register"}
                    </h1>
                    <br />
                    <label className="text-white" htmlFor="Email ">
                        {"Email"}
                    </label>
                    <br />
                    <input
                        className="w-full rounded"
                        type="email"
                        required
                        name="email"
                        id="email"
                    />
                    <br />
                    <label className="text-white" htmlFor=" username ">
                        {"Username"}
                    </label>
                    <br />
                    <input
                        className="w-full rounded"
                        type="text"
                        required
                        name="username"
                        id="username"
                    />
                    <br />
                    <label className="text-white" htmlFor="Password">
                        {"Password"}
                    </label>
                    <br />
                    <input
                        id="password"
                        name="password"
                        className="w-full rounded"
                        type="password"
                        required
                        ref={passwordRef}
                        onChange={handleInputChange}
                    />
                    <br />
                    <label className="text-white" htmlFor="password">
                        {"Confirm Password"}
                    </label>
                    <br />
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full rounded"
                        type="password"
                        required
                        ref={confirmPasswordRef}
                        onChange={handleInputChange}
                    />
                    <br />
                    {passwordLengthError && (
                        <p className="text-red-600">
                            Parola trebuie sa fie de minim 8 caractere
                        </p>
                    )}
                    {passwordError && (
                        <p className="text-red-600">Parolele nu coincid!</p>
                    )}
                    <button

                        id="btnRegister"
                        disabled={!passwordsMatch || passwordLengthError}
                        className="bg-white mx-auto border px-3.5 w-full rounded font-semibold text-Black-Blue my-5"
                        type="submit"
                    >
                        {"Register"}
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            id="btnForGoogle"
                            className="border bg-red-300 rounded-md "
                            type="button"
                        >
                            {"Google"}
                        </button>
                        <button
                            id="btnForFacebook"
                            className="border bg-red-300  rounded-md "
                            type="button"
                        >
                            {"Facebook"}
                        </button>
                    </div>
                    <button
                        id="btnToLogin"
                        className=" text-white block  mb-2.5 mx-auto my-auto  "
                        onClick={handleButtonClick}
                        type="button"
                    >
                        {"Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
