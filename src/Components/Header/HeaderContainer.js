import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ router }) => {
  const isHomePage = router.location.pathname === "/";
  return {
    isHomePage,
  };
};

const HeaderContainer = connect(mapStateToProps, null)(Header);
export default HeaderContainer;
