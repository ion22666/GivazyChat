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

    function input_is_valid () {
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
  


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!input_is_valid()) return

        const json_body = {
            email: event.currentTarget.email.value,
            password:event.currentTarget.password.value
          };
        


          try {
            const response = await fetch("/api/login", {
                method: "POST",
              	headers:{
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(json_body),
            });
          
			if (!response.ok && setFormError("Login failed") === undefined) return;
            		
            const json  = await response.json();

            if(!json.token && alert("Serverul nu nea trimis nici un token") === undefined) return;

          	localStorage.setItem("token",json.token);
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
                        className="w-full rounded-2xl mt-5 text-center"
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
                        className="w-full rounded-br-2xl rounded-tl-2xl mb-5 mt-5 text-center"
                        type="password"
                        name="password"
                        ref={passwordRef}
                    />
                    
                    {formError && <p className="text-red-600">{formError}</p>}
                    <button
                        className="bg-Verde mx-auto mb-4 border px-3.5 w-full rounded font-semibold text-Black-Blue"
                        type="submit"
                        id="loginBtn"
                    >
                        {"LOGIN"}
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <button
                            onClick={()=>window.location.href = window.getGoogleRedirectLink("/api/login/google")}
                            type="button"
                            className="text-center border bg-slate-100 rounded-md "
                            id="loginGoogleBtn"
                        >
                            {"Google"}
                        </button>
                        
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
