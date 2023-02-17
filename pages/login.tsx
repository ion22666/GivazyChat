import * as React from "react";

function LoginPage() {
    return (

        <div className=" grid place-items-center mt-20">             

            <div className="bg-red-200 border-2 leading-9 w-80  h-120  pl-2.5">
                <form action="api/login" method="POST">
                    <h1 className="text-center mt-5">Login Here</h1> <br /> 

                    <label htmlFor="Email">Email</label> <br />
                    <input type="text" required /> <br />

                    <label htmlFor="Password">Password</label> <br /> 
                    <input type="text" required /> <br />
                    <div >
                        <button>Google</button>
                        <button>Facebook</button>
                    </div>
                    <button className="block mx-auto my-6 border bg-red-300 px-3.5" type="submit">Log in</button>
                </form>
            </div>

        </div>
    );
}

export default LoginPage;
