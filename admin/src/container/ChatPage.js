
import { connect } from 'react-redux';
import {Chat} from '../component/Chat/Chat';
import io from 'socket.io-client';


function mapStateToProps(state) {

    const socket =   io("http://localhost:4000", {
    query: {token: state.authencationReducer.user.user.remember_token }
});

    return { 
        user: state.authencationReducer.user.user,
        socket  : socket,
    }
}

export default connect(mapStateToProps, null)(Chat);