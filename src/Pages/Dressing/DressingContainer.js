import { connect } from "react-redux";
import { createItem } from "../../actions/itemActions";
import Dressing from "./Dressing";

const mapDispatchToProps = dispatch => ({
  createItem: values => {
    debugger;
    dispatch(createItem(values));
  },
});

const DressingContainer = connect(null, mapDispatchToProps)(Dressing);
export default DressingContainer;
