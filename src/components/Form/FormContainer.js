import { connect } from "react-redux";
import {loadAllClubsRequest} from "../../redux/clubsRedux";
import Form from '../Form/Form';

const mapDisptachToProps = dispatch => ({
    loadAllClubsRequest: () => dispatch(loadAllClubsRequest()),
})

export default connect(null, mapDisptachToProps )(Form);