import { connect } from "react-redux";
import { register, login } from "../../actions/userActions";
import Login from "./Login";

const mapStateToProps = ({ user, alert, router }) => {
  const isHomePage = router.location.pathname === "/";
  return {
    isLoading: user.isLoading,
    isCreated: user.isCreated,
    alert,
    isHomePage,
    history: router.history,
  };
};

const mapDispatchToProps = dispatch => ({
  register: values => {
    dispatch(register(values));
  },
  login: values => {
    dispatch(login(values));
  },
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
