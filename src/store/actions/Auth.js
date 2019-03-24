import * as actionTypes from './actionType';


export const authStart = () =>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authFail = (error) =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const authSuccess = (response) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data : response
    };
};


export const logout  = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return{
        type :actionTypes.AUTH_LOGOUT
    }
}

export const onviewalbum = (val) =>{
    return {
        type: actionTypes.ONVIEW_ALBUM,
        data : val
    };
}

export const authexpireTimrout = (exp_time) =>{
    return dispatch => {
        setTimeout(() =>{
            dispatch(logout());
        },exp_time *1000);
    }
}
export const auth  = (response) =>{
    return dispatch => {
            dispatch(authStart());
            console.log(response);
            const expirationDate = new Date (new Date().getTime() + response.data_access_expiration_time    * 1000);
            localStorage.setItem('token',response.accessToken);
            localStorage.setItem('userId',response.userID);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(response));
            dispatch(authexpireTimrout(response.data_access_expiration_time  ))
    }
}


export const  authRedirectPath = (path) =>{
    return{
        type :actionTypes.AUTH_REDIRECT_PATH,
        path:path
    }
}


export const authCheckState = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate < new Date()){
                dispatch(logout());
            }else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(authexpireTimrout( (expirationDate.getTime() - new Date().getTime())/1000 ));
            }
           
        }
    }
}