import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
//import { changePass } from '../../actions'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/CancelOutlined';
import Check from "@material-ui/icons/Check";
import Info from "@material-ui/icons/info";
import InputBase from "@material-ui/core/InputBase/InputBase";
import CCData from '../fakedata/cc_fake.json';
import TestsData from '../fakedata/Tests_fake.json';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
let update = require('immutability-helper');

const styles = theme => ({
  root:{
    padding: '1%',
    backgroundColor: '#f0f1f6',
    paddingTop: '80px',
    height:'100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
  textField2: {
    marginRight:'4%',
    width: '45%',
  },
  cctextField:{
    width:'70%',
    margin:'0px',
    padding:'0px'
  },
  card: {
    width: '100%',
  },
  actions: {
    display: 'flex',
  },
  leftGrid:{
    padding: '2%',
    paddingTop:'0px',
    borderRight:'1px solid #D1D2D7',
  },
  rightGrid:{
    padding: '2%',
  },
  iconBtn:{
    color:'#D9DADF',
  },
});


class PrescriptionWrittng extends React.Component{
  state = {
    ccFakeData: CCData,
    ccFiltered:[],
    TestsFakeData: TestsData,
    TestsFiltered:[],
    list:[],
    value:'',
    ccOnChange: false,
    OEvalue:'',
    OElist:[],
    Testsvalue:'',
    Testslist:[],
    TestsOnChange: false,
  };

  onRemoveItem = i => {
    //console.log(i);
    //console.log((this.state.list.length - i)-1);
    let x = (this.state.list.length - i)-1;//Since the list is printed in Descending order
    this.setState(state => {
      const list = state.list.filter((item, j) => x !== j);
      return {
        list,
      };
    });
  };
  onRemoveOE = i => {
    let x = (this.state.OElist.length - i)-1;
    this.setState(state => {
      const OElist = state.OElist.filter((item, j) => x !== j);
      return {
        OElist,
      };
    });
  };
  onRemoveTests = i => {
    let x = (this.state.Testslist.length - i)-1;
    console.log(x);
    this.setState(state => {
      const Testslist = state.Testslist.filter((item, j) => x !== j);
      return {
        Testslist,
      };
    });
  };

  addCustomItem = () => {
    let customItemValue = this.state.value;
    let latestId = `${this.state.ccFakeData.length + 1}`;

    this.setState((prevState) => ({
      list: [...prevState.list, {name:customItemValue, id: latestId }],
      ccFakeData : [...prevState.ccFakeData, {name:customItemValue, id: latestId }],
      value:''
    }));
  };
  addCustomOE=()=>{
    let customItemValue = this.state.OEvalue;
    let latestId = `${this.state.OElist.length + 1}`;
    this.setState((prevState) => ({
      OElist: [...prevState.OElist, {name:customItemValue, id: latestId }],
      //ccFakeData : [...prevState.ccFakeData, {name:customItemValue, id: latestId }],
      OEvalue:''
    }));
  }
  addCustomTests=()=>{
    let customItemValue = this.state.Testsvalue;
    let latestId = `${this.state.Testslist.length + 1}`;
    this.setState((prevState) => ({
      Testslist: [...prevState.Testslist, {name:customItemValue, id: latestId }],
      TestsFakeData : [...prevState.TestsFakeData, {name:customItemValue, id: latestId }],
      Testsvalue:''
    }));
  }
  addCC=(item)=>{
      this.setState((prevState) => ({
        list: [...prevState.list, {name:item.name, id:item.id}],
        value:''
      }));
  };
  
  addTests=(item)=>{
    this.setState((prevState) => ({
      Testslist: [...prevState.Testslist, {name:item.name, id:item.id}],
      Testsvalue:''
    }));
  };
  onUpdateItem = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.list;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({list: newData});
  };
  onUpdateOE = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.OElist;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({OElist: newData});
  };
  onUpdateTests = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.Testslist;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({Testslist: newData});
  };
  CCsearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({ccOnChange:true})
    if( keyword == ""){
      this.setState({ccOnChange:false})
    }
    this.setState({ value: event.target.value });
    let filtered = this.state.ccFakeData.filter((item)=>{
      return item.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1;
    });
    this.setState({
      ccFiltered:filtered,
      ccOnChange:true
    })
  };

  OEsearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({OEvalue:keyword});
  };

  TestsSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({TestsOnChange:true})
    if( keyword == ""){
      this.setState({TestsOnChange:false})
    }
    this.setState({ Testsvalue: event.target.value });
    let filtered = this.state.TestsFakeData.filter((item)=>{
      return item.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1;
    });
    this.setState({
      TestsFiltered:filtered,
      TestsOnChange:true
    })
  };
  render(){
    const listCopy = this.state.list;
    const OElistCopy = this.state.OElist;
    const TestlistCopy = this.state.Testslist;
    const { classes } = this.props;
    const CC = this.state.ccOnChange?this.state.ccFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addCC(item)} style={{cursor:'pointer'}}>
          {item.name}
        </li>
      )
    }):null;
    const TESTS = this.state.TestsOnChange?this.state.TestsFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addTests(item)} style={{cursor:'pointer'}}>
          {item.name}
        </li>
      )
    }):null;
    return (
      <div className={classes.root}>
        <Card>
          <Grid container style={{width:'100%',padding:'0% 1%',borderBottom:'1px solid #D1D2D7'}}>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid item xs={3}>
                <TextField
                  id="standard-name"
                  label="Patient Name"
                  className={classes.textField}
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="standard-name"
                  label="Age"
                  className={classes.textField2}
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Sex"
                  className={classes.textField2}
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="standard-name"
                  label="Mobile"
                  className={classes.textField}
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="standard-name"
                  label="Email"
                  className={classes.textField}
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="standard-name"
                  label="Id"
                  className={classes.textField}
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  margin="normal"
                />
              </Grid>
            </form>
          </Grid>
          <Grid container >
            <Grid item xs={3} className={classes.leftGrid}>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>C/C</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'150px',position:'relative',overflowY:'auto'}}>
                <TextField
                  id="standard-name"
                  label="Add New +"
                  className={classes.cctextField}
                  value={this.state.value}
                  onChange={this.CCsearchKeywords}
                  margin="normal"
                  style={{fontSize:'14px'}}
                />
                <IconButton
                  onClick={this.addCustomItem}
                  disabled={!this.state.value}
                  style={{marginTop:'-40px',marginLeft:'70%'}}
                >
                  <Check style={{color:'#7f7f7f'}}/>
                </IconButton>
                {!this.state.value==""?
                  <div style={{maxHeight:'200px', position:'relative', overflow:'visible',padding:'0px',marginTop:'-15px'}}>
                    <ul style={{marginLeft:'-35px',marginTop:'-1px'}}>
                      {!this.state.value==""?CC:null}
                    </ul>
                  </div>:null
                }
                {listCopy != null ?
                  listCopy.slice(0).reverse().map((itemx,index) => (
                  <div key={index} style={{margin:'0px', padding:'0px'}}>
                    <TextField
                      id={itemx.id}
                      className={classes.cctextField}
                      name={`${index}`}
                      value={itemx.name}
                      onChange={this.onUpdateItem.bind(this)}
                      margin="normal"
                      style={{fontSize:'14px',marginTop:'-15px'}}
                    />
                    <IconButton
                      onClick={() => this.onRemoveItem(index)}
                      style={{marginTop:'-40px',marginLeft:'70%'}}
                    >
                      <Cancel  style={{color:'#7f7f7f', fontSize:'18px',}}/>
                    </IconButton>
                  </div>
                )) : null}
              </div>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>O/E</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'100px',position:'relative',overflowY:'auto'}}>
                <TextField
                  id=""
                  label="Add New"
                  className={classes.cctextField}
                  value={this.state.OEvalue}
                  onChange={this.OEsearchKeywords}
                  margin="normal"
                  style={{fontSize:'14px'}}
                />
                <IconButton
                  onClick={this.addCustomOE}
                  disabled={!this.state.OEvalue}
                  style={{marginTop:'-40px',marginLeft:'70%'}}
                >
                  <Check style={{color:'#7f7f7f'}}/>
                </IconButton>
                
                {OElistCopy != null ?
                  OElistCopy.slice(0).reverse().map((itemx,index) => (
                  <div key={index} style={{margin:'0px', padding:'0px'}}>
                    <TextField
                      id={itemx.id}
                      className={classes.cctextField}
                      name={`${index}`}
                      value={itemx.name}
                      onChange={this.onUpdateOE.bind(this)}
                      margin="normal"
                      style={{fontSize:'14px',marginTop:'-17px'}}
                    />
                    <IconButton
                      onClick={() => this.onRemoveOE(index)}
                      style={{marginTop:'-40px',marginLeft:'70%'}}
                    >
                      <Cancel  style={{color:'#7f7f7f', fontSize:'18px',}}/>
                    </IconButton>
                  </div>
                )) : null}
              </div>
              
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>Tests</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'120px',position:'relative',overflowY:'auto'}}>
                <TextField
                  id="tests"
                  label="Add Tests"
                  className={classes.cctextField}
                  value={this.state.Testsvalue}
                  onChange={this.TestsSearchKeywords}
                  margin="normal"
                  style={{fontSize:'14px'}}
                />
                <IconButton
                  onClick={this.addCustomTests}
                  disabled={!this.state.Testsvalue}
                  style={{marginTop:'-40px',marginLeft:'70%'}}
                >
                  <Check style={{color:'#7f7f7f'}}/>
                </IconButton>
                {!this.state.Testsvalue==""?
                  <div style={{maxHeight:'200px', position:'relative', overflow:'visible',padding:'0px',marginTop:'-15px'}}>
                    <ul style={{marginLeft:'-35px',marginTop:'-1px'}}>
                      {!this.state.Testsvalue==""?TESTS:null}
                    </ul>
                  </div>:null
                }
                {TestlistCopy != null ?
                  TestlistCopy.slice(0).reverse().map((itemx,index) => (
                  <div key={index} style={{margin:'0px', padding:'0px'}}>
                    <TextField
                      id={itemx.id}
                      className={classes.cctextField}
                      name={`${index}`}
                      value={itemx.name}
                      onChange={this.onUpdateTests.bind(this)}
                      margin="normal"
                      style={{fontSize:'14px',marginTop:'-15px'}}
                    />
                    <IconButton
                      onClick={() => this.onRemoveTests(index)}
                      style={{marginTop:'-40px',marginLeft:'70%'}}
                    >
                      <Cancel  style={{color:'#7f7f7f', fontSize:'18px',}}/>
                    </IconButton>
                  </div>
                )) : null}
              </div>      
            </Grid>
            <Grid item xs={6} className={classes.leftGrid} >

            </Grid>
            <Grid item xs={3} className={classes.rightGrid}>
              <Info style={{fontSize:'18px',color:'orange'}}/>
              <h5 style={{marginTop:'-21px',marginLeft:'31px'}}>Suggestions</h5>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}
PrescriptionWrittng.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state){
  console.log(state.user)
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(withStyles(styles)(PrescriptionWrittng));
