'use client'
import Navbar from "@/Components/Navbar";
import { authClient } from "@/libs/auth-client";
import { router } from "better-auth/api";
import Link from "next/link";
import { useForm } from "react-hook-form";


const page = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) =>{
        const { data:res, error } = await authClient.signIn.email({
    email: data.email, 
    password: data.password,
    rememberMe: true,
    callbackURL: "/",
     
});
router.push("/");
    }
    return (
        <div className="px-3.5">
           
           <div className="w-full md:w-[25%] md:pt-26 mx-auto py-25 px-20 bg-gray-100 space-y-4">
              <h2 className="text-2xl font-semibold">Login here</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2" >
              <fieldset className="fieldset">
       <legend className="fieldset-legend">Email</legend>
       <input type="email" {...register("email",{required:true})} className="input" placeholder="Type Your email" />
      {errors.email&&<span>email is required</span>}
     </fieldset>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">password</legend>
     <input type="password" {...register("password",{required:true})} className="input" placeholder="Type your password" />
         {errors.password&&<span>password is required</span>}
</fieldset>
     <p>Don't Have any account ? <Link className="text-blue-600" href={'/signin'}>Click here </Link></p>
            <button type="submit" className="btn w-full bg-[#403F3F] text-white">Login</button>
            </form>
           </div>
            
        </div>
    );
};

export default page;