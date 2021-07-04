import { connect } from "react-redux";
import ChangeBackground from "./ChangeBackground";
import changBackgroundColor from './ChangeBackground.action'

const mapStateToProps = state => {
    return{
        changBackgroundColor: state.changBackgroundColor
    }
};

const mapDispatchToProps = dispatch => {
    return{
        changeBackgroundColor: () => dispatch(changBackgroundColor())
    }
}
const ChangeBackground = connect(mapStateToProps, mapDispatchToProps)(ChangeBackground)

export default ChangeBackgroundContainer 