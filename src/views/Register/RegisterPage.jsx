import { useNavigate } from "react-router-dom";
import registerApi from "../../api/registerApi";
import FormInput from "../../components/forms/FormInput"


function RegisterPage(){
    const navigate = useNavigate()

    const handleRegister = async (user) => {
        try {
            const response = await registerApi.post(user);
            const value = response.data.data
            navigate('/')
        } catch (error) {
            window.alert(error)
        }
    }

    return(
        <div className="signUp">
            <FormInput typeForm={'Sign up'} handleValues={handleRegister}/>
        </div>
    )
    
}

export default RegisterPage