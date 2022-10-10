import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerApi from "../../api/registerApi";
import FormInput from "../../components/forms/FormInput"


function RegisterPage(){
    const navigate = useNavigate()

    const handleRegister = async (user,handleClick) => {
        handleClick(true)
        try {
            const response = await registerApi.post(user);
            if(response.data.statusCode===200){
                toast.success(response.data.message)
            }
            else{
                toast.error(response.data.message)
            }
            navigate('/')
        } catch (error) {
            toast.error(error.response.data.message)
        }
        handleClick(false)
    }

    return(
        <div className="signUp">
            <FormInput typeForm={'Sign up'} handleValues={handleRegister}/>
        </div>
    )
    
}

export default RegisterPage