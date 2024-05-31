import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link,  useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Register = () => {

    const { createUser, updateUserProfile } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const {register,handleSubmit, formState: { errors } } = useForm();

    // code for navigations 
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location?.state || "/";

    // const password = watch("password");

    const onSubmit = (data) => {
        const {email, password, fullName, image} = data;
        // create user and update profile 
        createUser(email, password)
        .then(result =>{
          updateUserProfile(fullName, image);
          if (result.user) {
              navigate('/login');
              // Show toast notification
             toast.success('Register User successfully');
            
          }
      });
    };

    return (
        <div>
            <Helmet>
                <title> Eureka Crafts || Register</title>
            </Helmet>

            <div className="min-h-[700px]  bg-white flex justify-center items-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 border border-blue-200 hover:scale-105 transition-all hover:border-blue-700">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Register Now..!!</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Register an account to enjoy all the services without any ads for free!</p>
                    </div>
                    <div className="space-y-4">
                        <input type="text" placeholder="Full Name" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" 
                            {...register("fullName", { required: true })}
                        />
                        {errors.fullName && <span className="text-red-500">This field is required</span>}

                        <input type="text" placeholder="Email" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}

                        <input type="text" placeholder="Image URL" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" 
                            {...register("image", { required: true })}
                        />
                        {errors.image && <span className="text-red-500">This field is required</span>}

                      
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type={showPass ? "text" : "password"} 
                            placeholder="password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" {...register("password", {
                                required: true,


                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                                    message: "Password must contain at least one uppercase and one lowercase letter"
                                }





                            })} />
                            <span onClick={() => setShowPass(!showPass)} className="absolute text-xl top-12 right-6">
                                {
                                    showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </span>
                            {errors.password && <small className="text-red-500 font-medium mt-1">Password must be at least 6 characters & Password must contain at least one uppercase and one lowercase letter </small>}
                           
                        </div>
                        
                    </div>
                    <div className="text-center mt-6">
                    <button className="w-full py-2 text-xl text-white bg-blue-700 rounded-lg
                     hover:bg-white hover:text-blue-700 transition-all uppercase hover:border hover:border-blue-700 
                     font-semibold">Register</button>
                        <p className="mt-4 text-sm">Already Have An Account? <Link to='/login'><span className="underline 
                         cursor-pointer  font-bold text-blue-900">Login</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;


