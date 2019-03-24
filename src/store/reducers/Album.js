import * as actionTypes from  '../actions/actionType';
import { updateObject } from '../utility';
const initialState = {
    albums:null,
    insidealbums:null,
    
};



const albumSuccess = (state, action) => {
    return updateObject( state, { 
        
        albums : action.data.data
     } );
};

const albumFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const insidealbumSuccess = (state, action) => {
    
    return updateObject( state, { 
        
        insidealbums : action.data.data.data
     } );
};
const reducer = (state=initialState , action) =>{
    switch(action.type){
        
        case actionTypes.ALBUM_SUCCESS: return albumSuccess(state,action);
        case actionTypes.INSIDEALBUM_SUCCESS: return insidealbumSuccess(state,action);
        case actionTypes.ALBUM_FAIL: return albumFail(state,action);
        
        default : return state;
    }

}

export default reducer;