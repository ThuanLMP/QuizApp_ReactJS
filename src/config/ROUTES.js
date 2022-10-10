
import ChoiceFeature from "../views/ChoiceFeature/ChoiceFeature";
import ForgotPasswordPage from "../views/ForgotPassword/ForgotPasswordPage";
import LoginPage from "../views/Login/LoginPage"
import Management from "../views/Management/Management";
import AddQuestion from "../views/Management/QuestionManagement/AddQuestion";
import AddUser from "../views/Management/UserManagement/AddUser";
import GetQuestions from "../views/PlayQuiz/GetQuestions";
import PlayQuiz from "../views/PlayQuiz/PlayQuizPage";
import ShowResult from "../views/PlayQuiz/ShowResult/ShowResult";
import RegisterPage from "../views/Register/RegisterPage";

const ROUTES = [
    {
        path: '/',
        component: <LoginPage/>
    },
    {
        path: '/register',
        component: <RegisterPage/>
    },
    {
        path: '/forgotpassword',
        component: <ForgotPasswordPage/>
    },
    {
        path: '/play',
        component: <PlayQuiz/>,
        roles: ['user'] 
    },
    {
        path: '/play/result',
        component: <ShowResult/>,
        roles: ['user']
    },
    {
        path: '/choicefeature',
        component: <ChoiceFeature/>,
        roles: ['user','admin']
    },
    {
        path: '/getquestions',
        component: <GetQuestions/>,
        roles: ['user']
    },
    {
        path: '/admin/management',
        component: <Management/>,
        roles: ['user','admin']
    },
    {
        path: '/admin/management/addQuestion',
        component: <AddQuestion/>,
        roles: ['user','admin']
    },
    {
        path: '/admin/management/addUser',
        component: <AddUser/>,
        roles: ['user','admin']
    }
]

export default ROUTES;