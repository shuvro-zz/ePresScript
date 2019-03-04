import React from 'react';
import {treatmentAction} from "../actions/treatmentAction";
import { connect } from 'react-redux';


class Treatment extends React.Component{

    state={
        name:'',
        description:''
    } 	
    submitForm = (e) => { 
        e.preventDefault();
        this.props.dispatch(treatmentAction(this.state));
		console.log(this.state);
  	}
    handleName=(event)=>{
        this.setState({name:event.target.value});
    }
    handleDescription=(event)=>{
        this.setState({description:event.target.value});
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
    return {
      treatment: state.treatment
    };
  }
  export default connect(mapStateToProps)(Treatment);