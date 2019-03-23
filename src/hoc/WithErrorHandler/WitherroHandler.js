import React, {Component}from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../_Aux/_Aux';
const WithErroHandler = (WrappedComponent,axios) =>{
    return class extends Component{
        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });


            axios.interceptors.response.use(null,error=>{
                this.setState({error:error});
            });
        }

        confirmedHandler(){
            this.setState({error:null});
        }
        render(){
            return(
                <Aux>
                        <Modal show={this.state.error}  cancel={this.props.confirmedHandler}>
                                { this.state.error ? this.state.error.message : null}

                        </Modal>
                        <WrappedComponent {...this.props} />
                </Aux>
                
            )
        }
    }
     
}
   

export default WithErroHandler;

