import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ router, item }) => {
  const isHomePage = router.location.pathname === "/";
  const hasDresslist = item?.list.length > 0;

  return {
    isHomePage,
    hasDresslist,
  };
};

const HeaderContainer = connect(mapStateToProps, null)(Header);
export default HeaderContainer;
