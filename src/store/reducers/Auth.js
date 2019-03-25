import * as actionTypes from  '../actions/actionType';
import { updateObject } from '../utility';
const initialState = {
    token:null,
    error :null,
    loading :false,
    Auth_redirec_path :"/",
    view_album :false,
    name:'',
    email:'',
    userId:'',
    picture:'ccc'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    console.log('action');
    console.log(action.data);
    return updateObject( state, { 
        token: action.data.accessToken,
        userId: action.data.userID,
        email:action.data.email,
        name:action.data.name,
        picture:action.data.picture,
        error: 'error',
        view_album: false
        
     } );
};

const onsuccessload = (state,action) =>{
    return updateObject( state, { 
        token: action.accessToken,
        userId: action.userID,
        name:action.name,
        email:action.email,
        picture : action.picture,
        view_album: true
        
     } );
}
const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject( state, {
        token:null,
        userId:null,
        view_album :false
    });
};

const onviewalbum = (state,action) =>{
    return updateObject( state, {
        view_album : action.data
    });
}
const authRedirectPath = (state,action) =>{
    return updateObject( state, {
        Auth_redirec_path:action.path
    });
}
const reducer = (state=initialState , action) =>{
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state,action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state,action);
        case actionTypes.AUTH_FAIL: return authFail(state,action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state,action);
        case actionTypes.AUTH_REDIRECT_PATH : return authRedirectPath(state,action);
        case actionTypes.ONVIEW_ALBUM : return onviewalbum(state,action);
        case actionTypes.AUTH_SUCCESSLOAD : return onsuccessload(state,action);
        default : return state;
    }

}

export default reducer;