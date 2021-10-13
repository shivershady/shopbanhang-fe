import { connect } from "react-redux";
import Home from "../../views/Home/Home";
import { doGetUser } from "../userReducer";

const mapActionsToProps = {doGetUser};

export default connect(null, mapActionsToProps)(Home);
