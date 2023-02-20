import * as React from "react";

import { useRouter } from "next/router";

import { useRef, useState } from "react";

// next.js route function to login page

function RegisterPage() {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/login");
    };

// Verificator de  input pentru parole

    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);

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

// retrun cu formularu de register

    return (
        <div className=" grid place-items-center mt-10">
            <div className=" bg-Black-Blue border-2 leading-9 w-80  h-120 px-2.5 rounded-md ">
                <form
                    action="api/login"
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
                    />
                    <br />
                    <label className="text-white" htmlFor="Password">
                        {"Password"}
                    </label>
                    <br />
                    <input
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
                        className="w-full rounded"
                        type="password"
                        required
                        ref={confirmPasswordRef}
                        onChange={handleInputChange}
                    />
                    <br />
                    {passwordLengthError && <p className="text-red-600">Parola trebuie sa fie de minim 8 caractere</p>}
                    {passwordError && <p className="text-red-600">Parolele nu coincid!</p>}
                    <button

                        disabled={!passwordsMatch || passwordLengthError}
                        className="bg-white mx-auto border px-3.5 w-full rounded font-semibold text-Black-Blue my-5"
                        type="submit"
                    >
                        {"Register"}
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
                        onClick={handleButtonClick}
                        className=" text-white block  mb-2.5 mx-auto my-auto  "
                    >
                        {"Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
