import { connect } from "react-redux";
import { createItem, resetItem } from "../../actions/itemActions";
import Dressing from "./Dressing";

const mapStateToProps = ({ item, alert }) => ({
  isLoading: item.isLoading,
  alert,
  isCreated: item.isCreated,
});

const mapDispatchToProps = dispatch => ({
  createItem: values => {
    dispatch(createItem(values));
  },
  resetItem: () => {
    dispatch(resetItem());
  },
});

const DressingContainer = connect(mapStateToProps, mapDispatchToProps)(Dressing);
export default DressingContainer;
