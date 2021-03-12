import { connect } from "react-redux";
import ListingsPage from "../Components/Listingspage/Listingspage";
import { removeBusiness } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    business: state.business,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (index) => dispatch(removeBusiness(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsPage);
