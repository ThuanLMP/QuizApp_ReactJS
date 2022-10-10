import { toast } from "react-toastify";
import forgotPasswordApi from "../../api/forgotPasswordApi"
import FormInput from "../../components/forms/FormInput"


function ForgotPasswordPage() {
    const handleForgotPassword = async (email, handleClick) => {
        handleClick(true)
        try {
            const response = await forgotPasswordApi.post(email);
            if (response.data.statusCode === 200) {
                toast.success(response.data.message)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
           
        }
        handleClick(false)
    }

    return (
        <div className="forgotPassword">
            <FormInput typeForm={'Forgot Password'} handleValues={handleForgotPassword} />
        </div>
    )

}

export default ForgotPasswordPage