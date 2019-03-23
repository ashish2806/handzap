import React , { Component } from "react";
import axios from 'axios';
class Album extends Component{

    loginHandler(){

        const data ={
            //email:this.props.ema,
            //password:this.props.pas
        }
        
        axios.get('/105738090601896/albums',{headers: {
            Authorization: 'Bearer EAAFZAlPe5DS8BAEeYNHZABMkVwZCuZA8kKguSouvDkdjvLZCwvyU6TZC0hYY9kNpcGmKufh1PhA9GnOb79G0jJ0SzXGZBTZAPLwMVY3TAQ4WcctYtglzTwtog6MBLytS0ZChcQhfd2xKba29GdqPjfYMrgZCurHDIMXObXJlhQhDERdlNdHCytv5x1HRjQZAPuQ7wdIq6AVI6rat65k1wZBwTY3F'
          }}).then(response =>{
            
               console.log(response);
               
        }).catch(error=>{
            if (error.response.status === 401) {
                console.log(error.response.data.error);
               // console.log('unauthorized, logging out ...');
               
            }
            return Promise.reject(error.response);
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.loginHandler}>Get albums</button>

            </div>
        )
    }
}

export default Album;