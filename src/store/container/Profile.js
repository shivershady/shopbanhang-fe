import { connect } from "react-redux";
import Profile from "../../views/Profile";

const mapActionsToProps = state => ({
    user: state.user,
});

export default connect(mapActionsToProps)(Profile);
