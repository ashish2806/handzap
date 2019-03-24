import * as actionTypes from './actionType';
import axios from 'axios';

export const albumStart = () =>{
    return{
        type:actionTypes.ALBUM_START
    }
}

export const albumFail = (error) =>{
    return{
        type:actionTypes.ALBUM_FAIL,
        error:error
    }
}

export const albumSuccess = (response) => {
    return {
        type: actionTypes.ALBUM_SUCCESS,
        data : response
    };
};

export const insidealbumSuccess = (response) => {
    return {
        type: actionTypes.INSIDEALBUM_SUCCESS,
        data : response
    };
};


export const getalbumphotos = (id ) =>{
    return dispatch => {
       // 105843377258034/photos?fields=picture
        console.log(id+"id");
        let token =  localStorage.getItem('token');
        axios.get('/'+ id +'/photos?fields=picture',{headers: {
            Authorization: 'Bearer '+ token
          }}).then(response =>{
           
            
            dispatch(insidealbumSuccess(response))
               
        }).catch(error=>{
            if (error.response === 401) {
                console.log(error.response.data.error);
                dispatch(albumFail(error.response.data.error))
               
            }
          //  return Promise.reject(error.response);
        });
    }
}

export const getalbumLists  = (token,id) =>{
    return dispatch => {
         //   dispatch(authStart());
            //console.log(token + id);
            axios.get('/'+ id +'/albums?fields=name,id,created_time,picture',{headers: {
                Authorization: 'Bearer '+ token
              }}).then(response =>{
               
                
                dispatch(albumSuccess(response))
                   
            }).catch(error=>{
                if (error.response === 401) {
                    console.log(error.response.data.error);
                    dispatch(albumFail(error.response.data.error))
                   
                }
              //  return Promise.reject(error.response);
            });
            /*const expirationDate = new Date (new Date().getTime() + response.data_access_expiration_time    * 1000);
            localStorage.setItem('token',response.accessToken);
            localStorage.setItem('userId',response.userID);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(response));*/
            
    }
}




