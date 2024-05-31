import { useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import LoginWithSocial from "../Components/LoginWithSocial/LoginWithSocial";


const Login = () => {

    const { signInUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit,  formState: { errors },} = useForm();

  // code for navigations 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";


    // /handle login 
    const onSubmit = (data) => {
        const {email, password} = data;

        signInUser(email, password)
       .then(result =>{

          if (result.user) {
              navigate(from);
             // Show toast notification
             toast.success('Login User successfully');
          }
      }).catch(toast.error('Invalid email or password. Please try again.'));
    };


    return (
      
        <div className="min-h-[700px] bg-white flex justify-center items-center mt-10">
           <Helmet>
                <title> Eureka Resort || Login</title>
            </Helmet>

  <form onSubmit={handleSubmit(onSubmit)} className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 border border-blue-200 hover:scale-105 transition-all hover:border-blue-700">
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login Your Account</h1>
      <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an account to enjoy all the services without any ads for free!</p>
    </div>
    <div className="space-y-4 relative">

      <input type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
      {...register("email", { required: true })}
      />
      {errors.fullName && <span className="text-red-500">This field is required</span>}

      <input type={showPass ? "text" : "password"} placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" 
      {...register("password", { required: true })}
      />
       <span onClick={()=>setShowPass(!showPass)} className="absolute right-6 bottom-3 text-2xl">
                {showPass ? <IoIosEyeOff /> : <IoIosEye /> }</span>
      {errors.fullName && <span className="text-red-500">This field is required</span>}

    </div>
    <div className="text-center mt-6">
      <button className="w-full py-2 text-xl text-white bg-blue-700 rounded-lg
       hover:bg-white hover:text-blue-700 transition-all uppercase hover:border hover:border-blue-700 font-semibold">
        login</button>
      <p className="mt-4 text-sm">Dont have An Account? <Link to='/register'><span className="underline  cursor-pointer font-bold text-blue-900"> Sign Up</span></Link></p>
    </div>
    <div>
   <LoginWithSocial></LoginWithSocial>
  </div>
  </form>
</div>
    );
};

export default Login;

