import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import { logOutUser } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(null, mapDispatchToProps)(Navigation);