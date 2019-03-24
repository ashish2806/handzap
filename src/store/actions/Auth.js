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

export const authSuccessload = (token,id,name,email,picture) =>{
    return {
        type: actionTypes.AUTH_SUCCESSLOAD,
        accessToken: token,
        userID: id,
        name : name,
        email :email,
        picture : picture
    };
}
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
    console.log("fff");
    return dispatch => {
            dispatch(authStart());
          //  console.log(response);
            const expirationDate = new Date (new Date().getTime() + response.data_access_expiration_time    * 1000);
            localStorage.setItem('token',response.accessToken);
            localStorage.setItem('userId',response.userID);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('email',response.email);
            localStorage.setItem('name',response.name);
            localStorage.setItem('picture',response.picture.data.url);
            dispatch(authSuccess(response));
           // dispatch(authexpireTimrout(response.data_access_expiration_time  ))
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
            let response ={};
            response.accessToken = token;
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate < new Date()){
                dispatch(logout());
            }else{
                const userId = localStorage.getItem('userId');
                const name = localStorage.getItem('name');
                const email = localStorage.getItem('email');
                const picture  = localStorage.getItem('picture');
                dispatch(authSuccessload(token,userId,name,email,picture));
                dispatch(authexpireTimrout( (expirationDate.getTime() - new Date().getTime())/1000 ));
            }
           
        }
    }
}