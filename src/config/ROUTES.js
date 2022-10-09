
import ChoiceFeature from "../views/ChoiceFeature/ChoiceFeature";
import ForgotPasswordPage from "../views/ForgotPassword/ForgotPasswordPage";
import LoginPage from "../views/Login/LoginPage"
import Management from "../views/Management/Management";
import AddQuestion from "../views/Management/QuestionManagement/AddQuestion";
import AddUser from "../views/Management/UserManagement/AddUser";
import ErrorPage from "../views/NotFound/ErrorPage";
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
        component: <PlayQuiz/>
    },
    {
        path: '/play/result',
        component: <ShowResult/>
    },
    {
        path: '/choicefeature',
        component: <ChoiceFeature/>
    },
    {
        path: '/getquestions',
        component: <GetQuestions/>
    },
    {
        path: '/admin/management',
        component: <Management/>
    },
    {
        path: '/admin/management/addQuestion',
        component: <AddQuestion/>
    },
    {
        path: '/admin/management/addUser',
        component: <AddUser/>
    }
]

export default ROUTES;