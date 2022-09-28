import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";
import FormInput from "../../components/forms/FormInput"


function LoginPage() {
    const navigate = useNavigate()
    
    const handleLogin = async (user) => {
        try {
            const response = await loginApi.post(user);
            const value = response.data.data
            navigate('getquestions')
        } catch (error) {
            let messError = 'Email or password incorrect'
            window.alert(messError)
        }
    }

    return (
        <div className="signIn">
            <FormInput typeForm={'Sign in'} handleValues = {handleLogin} />
        </div>
    )

}

export default LoginPage