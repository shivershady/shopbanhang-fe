import { connect } from "react-redux";
import Header from "../components/Header/Header";

const mapActionsToProps = state => ({
    user : state.user,
});

export default connect(mapActionsToProps)(Header);