import * as React from "react";


function RegisterPage(){
    return(
        <div className=" grid place-items-center mt-10">             

            <div className=" bg-Black-Blue border-2 leading-9 w-80  h-120 px-2.5 rounded-md ">
                <form action="api/login" method="POST" encType="application/x-www-form-urlencoded">

                    <h1 className="text-center mt-5 text-xl  font-semibold text-white   ">Register</h1> <br /> 

                    <label className="text-white" htmlFor="Email ">Email</label> <br />
                    <input className="w-full rounded" type="text" required /> <br />

                    <label className="text-white" htmlFor=" username ">Username</label> <br />
                    <input className="w-full rounded" type="text" required /> <br />

                    <label className="text-white" htmlFor="Password">Password</label> <br /> 
                    <input className="w-full rounded" type="password" required  /> <br />

                    <label className="text-white" htmlFor="password"> Confirm Password</label> <br /> 
                    <input className="w-full rounded" type="password" required  /> <br />


                    <button className="bg-white mx-auto my-4 border px-3.5 w-full rounded font-semibold text-Black-Blue my-5" type="submit" >Register</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="border bg-red-300 rounded-md ">Google</button>
                        <button className="border bg-red-300  rounded-md ">Facebook</button>
                    </div>
                    <a className= ' text-white grid  text-center mb-2.5'  href="login">Login</a>
                    
                </form>
            </div>

        </div>


        
    );
    
}

export default RegisterPage;