import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";





const LoginWithSocial = () => {
    const { googleLogin , githubLogin} = useAuth();

  // code for navigations 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";


    const handleLoginWithSocialMedia = socialProvider =>{
        socialProvider()
        .then(result =>{

            if (result.user) {
                 toast.success('Login User Succeffuly')
                navigate(from);
             
            }
        });
    }
        return (
        <>
            <div className="divider">Continue With</div>
            <div className="flex gap-3 justify-center">
                <button 
                onClick={()=> handleLoginWithSocialMedia(googleLogin)} 
                className="btn btn-primary btn-outline"> <FcGoogle />
                Google</button>
                <button 
                onClick={()=> handleLoginWithSocialMedia(githubLogin)} 
                className="btn btn-primary btn-outline"> <FaGithub /> Github</button>
            </div>
        </>
    );
};

export default LoginWithSocial;