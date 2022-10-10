import { Navigate } from "react-router-dom";



const ProtectedRoute = ({ children, roles }) => {
    const user = JSON.parse(localStorage.getItem('user'))

    // Kiểm tra roles của đường dẫn có khớp với roles của tài khoản không
    const checkRoles = (roles1, roles2) => { 
        if(roles2.length===1){
            return true
        }
        
        if (JSON.stringify(roles1) === JSON.stringify(roles2)) {
            return true
        } else {
            return false
        }
    }

    if (!user) {
        return <Navigate to="/" replace />
    } else {

        if (!checkRoles(user.roles, roles)) {
            return <Navigate to="/" replace />
        }
    }
    return children
}

export default ProtectedRoute