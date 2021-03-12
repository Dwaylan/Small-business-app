import { connect } from "react-redux";
import Business from "../Components/Business/Business";

const mapStateToProps = (state) => {
  return {
    business: state.business,
  };
};

export default connect(mapStateToProps)(Business);
