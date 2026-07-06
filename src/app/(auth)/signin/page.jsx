'use client'
import Navbar from "@/Components/Navbar";
import { authClient } from "@/libs/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
const page = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) =>{
        const { data:res, error } = await authClient.signUp.email({
   name:"turkyyyyy",
    email:data.email, // required
    password:data.password, // required
    
    callbackURL: "/",
    
});
console.log(error)
    }
    return (
         <div className="px-3.5">
           
           <div className="w-full md:w-[25%] md:pt-26 mx-auto py-25 px-20 bg-gray-100 space-y-4">
              <h2 className="text-2xl font-semibold">Sign in here</h2>
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
    
            <button type="submit" className="btn w-full bg-[#403F3F] text-white">sign in </button>
            </form>
           </div>
            
        </div>
    );
};

export default page;