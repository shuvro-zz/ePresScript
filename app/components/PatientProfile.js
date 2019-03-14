import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
//import { changePass } from '../../actions'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Cancel from '@material-ui/icons/Cancel';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from "@material-ui/icons/Search";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Create from "@material-ui/icons/Create";
import Add from "@material-ui/icons/Add";
import InputBase from "@material-ui/core/InputBase/InputBase";
import PatientData from '../fakedata/patient_fake.json';
import Button from '@material-ui/core/Button';
const styles = theme => ({
	root:{
		padding:'5%',
		paddingTop: '70px',
		backgroundColor:'#F0F1F6',
		height:'100%',
	},
	card: {
      width:'100%',
      marginTop:'-10px'
      
    },
    button:{
        width:'99%',
        color:'white'
        
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
		width: 30,
		height: 30,
        fontSize:'16px',
	},
	leftGrid:{
		padding: '12px',
	},
	rightGrid:{
		padding: '12px',
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
        fontSize:'14px',
        fontWeight:'bold',
        
	},
	cardSubHead:{
		color:'#BBBBBB',
		fontSize:'14px',
    },
    pName:{
        fontSize: '24px',
        fontWeight:'bold',
        textAlign:'left'
    },
    details:{
        fontSize: '18px',
        borderBottom: '1px solid #7f7f7f',
    },
    textBar:{
        backgroundColor:'#233645',
        padding:'7px 18px',
        width:'98%',
        margin:'0 auto',
        borderRadius:'3px',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        
    }
});  

class Patient extends React.Component{
	state = {
        expanded: false ,
        patientId:'',
        patients: PatientData,
        singlePatient:[]
	};

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
    };
    componentWillMount(){
        let id = this.props.location.search;
        var cutId = id.substr(1);
        //console.log(cutId)
        
        let data = this.state.patients.filter((item)=>{
            return item.id === cutId;
        });
        
        this.setState({
            singlePatient: data
        },()=>{
            console.log(this.state.singlePatient);
        });
        //console.log(data);
    }
    
	render(){
        const { classes } = this.props;
        const showName = this.state.singlePatient.map((item)=>{
            return(
                <Card className={classes.card} key={item.id} >
                <CardHeader 
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                        {`${item.firstname[0]}`+`${item.lastname[0]}`}
                        </Avatar>
                    }
                    title={
                        <Typography className={classes.cardHead}>{`${item.firstname}`+" "+`${item.lastname}`}</Typography>
                    }
                    />
                </Card>
            )
        });
        const showDetails = this.state.singlePatient.map((item)=>{
            return(
                <Grid container key={item.id}>
                    <Grid item xs={6} className={classes.leftGrid}>
                        <Typography className={classes.details}><span style={{fontWeight:'bold'}}>First Name: </span>{`${item.firstname}`}</Typography>
                        <Typography className={classes.details}><span style={{fontWeight:'bold'}}>Age: </span>{`${item.age}`}</Typography>
                        <Typography className={classes.details}><span style={{fontWeight:'bold'}}>Blood Group: </span>{`${item.blood}`}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.rightGrid}>
                        <Typography className={classes.details}><span style={{fontWeight:'bold'}}>Last Name: </span>{`${item.lastname}`}</Typography>
                        <Typography className={classes.details}><span style={{fontWeight:'bold'}}>Email: </span>{`${item.email}`}</Typography>
                        <Typography className={classes.details}><span style={{fontWeight:'bold'}}>Mobile: </span>{`${item.mobile}`}</Typography>
                        
                    </Grid>
                </Grid>
            )
        });

        

    return (
		<div className={classes.root}>
		<Grid container >
			<Grid item xs={6} className={classes.leftGrid}>
                <Link to="/patients"><Button variant="contained" color="primary">
                    <ArrowBack/>
                    All Patients
                </Button></Link>
			</Grid>
            <Grid item xs={1}></Grid>
			<Grid item xs={5} className={classes.rightGrid}>
				{showName}
			</Grid>
		</Grid>
        <div className={classes.textBar}>
            <h4 style={{color:'white'}}>Details</h4>
            <IconButton style={{position:'fixed',right:'75px', marginTop:'-26px'}}>
                <Create style={{fontSize:'18px'}}/>
            </IconButton>
        </div>
        {showDetails}
        <br/>
        <div className={classes.textBar}>
            <h4 style={{color:'white'}}>Diagnosis</h4>
            {/* <IconButton style={{position:'fixed',right:'75px', marginTop:'-26px'}}>
                <Create style={{fontSize:'18px'}}/>
            </IconButton> */}
        </div>
        <Grid container>
            <Grid item xs={4} className={classes.leftGrid}>
                <Button variant="contained" color="secondary" className={classes.button}><Add/>Decribe Symptoms</Button>                
            </Grid>
            <Grid item xs={4} className={classes.leftGrid}>
                <Button variant="contained" color="secondary" className={classes.button}><Add/>Add Prescription</Button>                
            </Grid>
            <Grid item xs={4} className={classes.leftGrid}>
                <Button variant="contained" color="secondary" className={classes.button}><Add/>Run Tests</Button>
            </Grid>
        </Grid>
        <br/>
        <div className={classes.textBar}>
            <h4 style={{color:'white'}}>Current Diagnosis and Treatment</h4>
             <IconButton style={{position:'fixed',right:'75px', marginTop:'-26px'}}>
                <Create style={{fontSize:'18px'}}/>
            </IconButton> 
        </div>
        <Grid container>
            <Grid item xs={4} className={classes.leftGrid}>
                <h4>Disease</h4>
                <p>Fever, Vomiting</p>                
            </Grid>
            <Grid item xs={4} className={classes.leftGrid}>
                <h4>Treatment and Medicine</h4>                
                <ul style={{listStyle:'none'}}>
                <li>Paractamol 1-1-1</li>
                <li>Napa 1-0-1</li>
                <li>Levocetrizine 1-1-1</li>
                <li>Ranitide 1-1-1 before Meal</li>
                </ul>
            </Grid>
            <Grid item xs={4} className={classes.leftGrid}>
                <h4>Tests</h4> 
                <p>None</p>               
            </Grid>
        </Grid>
        <br/>
        <div className={classes.textBar}>
            <h4 style={{color:'white'}}>Health Journey</h4>
            {/* <IconButton style={{position:'fixed',right:'75px', marginTop:'-26px'}}>
                <Create style={{fontSize:'18px'}}/>
            </IconButton> */}
        </div>
        Something (Couldn't Understand)
        <br/>
        Something (Couldn't Understand)
        <div className={classes.textBar}>
        <Button variant="contained" color="secondary" >Save</Button>                
        </div>
		</div>
      );
  }
}
Patient.propTypes = {
	classes: PropTypes.object.isRequired,
};
function mapStateToProps(state){
	return{
		user:state.user
	}
}

export default connect(mapStateToProps)(withStyles(styles)(Patient));