
import Form from '../components/Form';
const Login = () => {
    console.log("Login component rendered");
    return <Form route="/api/token/" method="login" />;
}
export default Login;