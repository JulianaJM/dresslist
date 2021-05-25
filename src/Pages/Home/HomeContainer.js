import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

const HomeContainer = connect(mapStateToProps, null)(Home);
export default HomeContainer;
