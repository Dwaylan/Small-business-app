import { connect } from "react-redux";
import Landingpage from "../Components/Landingpage/Landingpage";

const mapStateToProps = (state) => {
  return {
    business: state.business,
  };
};

export default connect(mapStateToProps)(Landingpage);
