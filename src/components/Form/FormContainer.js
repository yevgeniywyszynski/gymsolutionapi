import { connect } from "react-redux";
import {loadAllClubsRequest,getAllClubsId } from "../../redux/clubsRedux";
import {addNewUserRequest} from "../../redux/formRedux";
import Form from '../Form/Form';

const mapStateToProps = (state) => ({
    clubsId: getAllClubsId(state)
})

const mapDisptachToProps = dispatch => ({
    loadAllClubsRequest: () => dispatch(loadAllClubsRequest()),
    addNewUser:(newObj) => dispatch(addNewUserRequest(newObj))
})

export default connect(mapStateToProps, mapDisptachToProps )(Form);