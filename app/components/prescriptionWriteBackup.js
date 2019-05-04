import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/CancelOutlined';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from "@material-ui/icons/Search";
import Check from "@material-ui/icons/Check";
import Info from "@material-ui/icons/info";
import InputBase from "@material-ui/core/InputBase/InputBase";
import CCData from '../fakedata/cc_fake.json';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

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
    width:'80%',
    margin:'0px',
    padding:'0px'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  card: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#233645',
    width: 60,
    height: 60,
    fontSize:'25px',
    '&:hover':{
      backgroundColor: '#59B0F6',
    }
  },
  leftGrid:{
    padding: '2%',
    paddingTop:'0px',
    borderRight:'1px solid #D1D2D7',
  },
  rightGrid:{
    padding: '2%',
  },
  search: {
    color:'#515151',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.65),
    },
    width: '100%',
    boxShadow: '0 0 3px rgba(0,0,0,0.2)',
  },
  searchIcon: {
    width: theme.spacing.unit * 8,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 7,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 180,
      '&:focus': {
        width: 200,
      },
    },
  },
  iconBtn:{
    color:'#D9DADF',
  },
  cardCont:{
    marginLeft:'56px',
    marginTop:'-32px',
  },
  cardHead:{
    color:'#233645',
    fontSize:'16px',
    fontWeight:'bold',
    '&:hover': {
      color: '#59B0F6',
    },
  },
  cardSubHead:{
    color:'#BBBBBB',
    fontSize:'14px',
  },
  deleteButton:{
    color:'white',
    backgroundColor:'#DC3545',
    '&:hover':{
      backgroundColor:'#C82333',
    }
  },
  cancelButton:{
    color:'white',
    backgroundColor:'#17A2B8',
    '&:hover':{
      backgroundColor:'#007BFF',
    }
  }
});


class PrescriptionWrittng extends React.Component{
  state = {
    ccFakeData: CCData,
    ccFiltered:[],
    list:[],
    value:'',
    ccOnChange: false
  };

  onRemoveItem = i => {
    console.log(i)
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list,
      };
    });
  };
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onAddItem = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, {value:""}],
    }));


  };
  addCC=(item)=>{
    this.setState(state => {
      const list = [...state.list, item];
      return {
        list,
        value: '',
      };
    });
  };
  onUpdateItem = (val) => {
    //console.log(val.target.value);
    let target = val.target;
    let value = target.value;
    let name = target.name;
    //console.log(name);
    this.setState(state => {
      const list = state.list.map((item, j) => {
        if (j == name) {
          console.log('nakib')
          return value;
        } else {
          return item;
        }
      });
      return {
        list,
      };
    });
    console.log(this.state.list);
  };
  searchKeywords = (event)=>{
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
  render(){
    console.log(this.state);
    const { classes } = this.props;
    const CC = this.state.ccOnChange?this.state.ccFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addCC(item.name)} style={{cursor:'pointer'}}>
          {item.name}
        </li>
      )
    }):null;
    return (
      <div className={classes.root}>
        <Card>
          <Grid container style={{width:'100%',padding:'2%', paddingTop:'1%',borderBottom:'1px solid #D1D2D7'}}>
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
              {this.state.list.map((itemx,index) => (
                <div key={itemx} style={{margin:'0px', padding:'0px'}}>
                  <TextField
                    id="standard-name"
                    className={classes.cctextField}
                    name={`${index}`}
                    value={itemx}
                    onChange={this.onUpdateItem.bind(this)}
                    margin="normal"
                  />
                  <IconButton
                    onClick={() => this.onRemoveItem(index)}
                    style={{marginTop:'-40px',marginLeft:'80%'}}
                  >
                    <Cancel  style={{color:'#7f7f7f', fontSize:'18px',}}/>
                  </IconButton>
                </div>
                // <Chip
                // 	key={itemx}
                // 	label={itemx}
                // 	onDelete={()=>this.onRemoveItem(index)}
                // 	style={{marginTop:'5px'}}
                // />
                // <li key={itemx}>{itemx} <Cancel onClick={() => this.onRemoveItem(index)} style={{color:'#7f7f7f', fontSize:'13px',}}/></li>
              ))}

              <TextField
                id="standard-name"
                label="Add New"
                className={classes.cctextField}
                value={this.state.value}
                onChange={this.searchKeywords}
                margin="normal"
              />

              <IconButton
                onClick={this.onAddItem}
                disabled={!this.state.value}
                style={{marginTop:'-40px',marginLeft:'80%'}}
              >
                <Check style={{color:'#7f7f7f'}}/>
              </IconButton>
              {!this.state.value==""?
                <div style={{maxHeight:'200px', position:'relative', overflowY:'scroll',padding:'0px',marginTop:'-15px'}}>
                  <ul style={{marginLeft:'-35px',marginTop:'-1px'}}>
                    {!this.state.value==""?CC:null}
                  </ul>
                </div>:null
              }

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
