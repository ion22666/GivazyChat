import * as React from "react";

import { useRouter } from 'next/router'


function LoginPage() {

   
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/register')
        
        }

    return (

        <div className=" grid place-items-center mt-20">             

            <div className=" bg-Black-Blue border-2 leading-9 w-80  h-120 px-2.5 rounded-md ">
                <form action="api/login" method="POST" encType="application/x-www-form-urlencoded">

                    <h1 className="text-center mt-5 text-xl  font-semibold text-white   ">Login</h1> <br /> 

                    <label className="text-white" htmlFor="Email ">Email</label> <br />
                    <input className="w-full rounded" type="text" required /> <br />

                    <label className="text-white" htmlFor="Password">Password</label> <br /> 
                    <input className="w-full rounded" type="password" required /> <br />
                    <button className="bg-white mx-auto my-4 border px-3.5 w-full rounded font-semibold text-Black-Blue" type="submit" >LOGIN</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="border bg-red-300 rounded-md ">Google</button>
                        <button className="border bg-red-300  rounded-md ">Facebook</button>
                    </div>


                    <button onClick={handleButtonClick}  className= ' text-white block  mb-2.5 mx-auto my-auto  '>Register</button>
                    
                </form>
            </div>

        </div>


        
    );
}


//background-color: #ececec;
//background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.29'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");


export default LoginPage;
