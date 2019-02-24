import React from 'react';
import {treatmentAction} from "../actions/treatmentAction";
import { connect } from 'react-redux';
//import axios from 'axios';


class Treatment extends React.Component{

    state={
        name:'',
        description:''
    } 	
    submitForm = (e) => { 
        
        this.props.dispatch(treatmentAction(this.state));
		console.log(this.state);
  	}
    handleName=(event)=>{
        this.setState({name:event.target.value});
        console.log(this.state.name);
    }
    handleDescription=(event)=>{
        this.setState({description:event.target.value});
        console.log(this.state.description);
    }
    render() {
        const {imgSrc}= this.state;
        return (
            <div>
                <br/>
                <form onSubmit={this.submitForm}>
                    <h5>Name:</h5>
                    <input type="text" onChange={this.handleName}/>
                    <h5>Description:</h5>
                    <textarea onChange={this.handleDescription}></textarea>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    //console.log(state.treatment);
    return {
      treatment: state.treatment
    };
  }
  export default connect(mapStateToProps)(Treatment);