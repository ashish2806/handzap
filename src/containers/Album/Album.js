import React , { Component } from "react";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Albumview from '../../components/Albumview/Albumview';
import Slider from '../../components/Slider/Slider';
class Album extends Component{


     getalbumHandler(token,id){
        this.props.getalbum(token,id);
        this.props.onviewalbum();
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.getalbum(this.props.token,this.props.userId);
        }, 3000);
        this.props.onviewalbum();
    }
    render(){
        let albumdata = null;
        if(this.props.token !== null && this.props.albums) {

           // albumdata = this.props.albums.data;

            albumdata =  this.props.albums.data.map(igkey =>{
                    return (<Albumview key={igkey.id} name={igkey.name} insidealbum ={this.props.insidealbums} id={igkey.picture.data.url}  clicked={() => this.props.albumclick(igkey.id)} />);
                });
               
                    
        }

        let tri = null;
        if(this.props.insidealbums !== null){
            /*   tri = props.insidealbum.map(ig=>{
                    return (<span key={ig.id}><img src={ig}/></span>);
                });*/
                  tri = <Slider data ={this.props.insidealbums}/>
                }

       
        return(
            <div>
                <div className="fbData">
                    <button  onClick={() => this.getalbumHandler(this.props.token,this.props.userId)}>Refresh</button>
                </div>  
                {albumdata}
                {tri}
            </div>
        )
    }
}
const mapStatetpProps = state => {
    return{
            loading : state.auth.loading,
            token : state.auth.token,
            userId : state.auth.userId,
            albums : state.album.albums,
            insidealbums : state.album.insidealbums
    }
}

const mapDispatchtoProps = dispatch =>{
    return{
        getalbum : (token,id) => dispatch(actions.getalbumLists(token,id)),
        albumclick : (id) => dispatch(actions.getalbumphotos(id)),
        onviewalbum : () => dispatch(actions.onviewalbum(true))
    }
}
export default connect(mapStatetpProps,mapDispatchtoProps)(Album);