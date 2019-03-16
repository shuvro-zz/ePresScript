import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
//import { changePass } from '../../actions'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase/InputBase";
import PatientData from '../fakedata/patient_fake.json';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

const styles = theme => ({
	root:{
		padding: '5%',
		backgroundColor: '#f0f1f6',
		paddingTop: '80px',
		height:'100%',
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
		padding: '12px',
	},
	rightGrid:{
		padding: '12px',
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


class Patient extends React.Component{
	state = {
		expanded: false,
		patients: PatientData,
		filtered:[],
		searching:false,
		openAlert: false,
		openDeleteSuccess:false,
		deleteId:'',
		patientName:''

	};
	
	handleClickdeletePatient=(item,name)=>{
		console.log(name);
		this.setState({deleteId:item});
		this.setState({ openAlert: true,patientName: `${name}` });
	}
	handleDelete = () => {
		console.log(this.state.deleteId);
    this.setState({ deleteId: '', openAlert:false, openDeleteSuccess: true, });
  };
	handleClose = () => {
    this.setState({ openAlert: false, openDeleteSuccess: false });
  };
	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};
	searchKeywords = (event)=>{
		let keyword = event.target.value;

		let filtered = this.state.patients.filter((item)=>{
				return item.id.indexOf(keyword) > -1 || item.firstname.indexOf(keyword) > -1 || item.lastname.indexOf(keyword) > -1;
		});
		this.setState({
			filtered:filtered,
			searching:true
		})
	};
	
	render(){
		const { classes } = this.props;
		
		const items = !this.state.searching ? this.state.patients.map((item)=>{
			return(
				<Grid key={item.id} item xs={6} className={classes.leftGrid}>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Link to={{
								pathname:'/patient',
								search:`${item.id}`
							}}><Avatar aria-label="Recipe" className={classes.avatar}>
							{`${item.firstname[0]}`+`${item.lastname[0]}`}
							</Avatar></Link>
						}
						action={
							<IconButton className={classes.iconBtn} onClick={() => this.handleClickdeletePatient(`${item.id}`,`${item.firstname}`+" "+`${item.lastname}`)}>
								<Cancel/>
							</IconButton>
						}
						title={
							<Link to={{
								pathname:'/patient',
								search:`${item.id}`
							}}><Typography className={classes.cardHead}>{`${item.firstname}`+" "+`${item.lastname}`}</Typography></Link>
						}

						subheader={
							<div>
							<Typography className={classes.cardSubHead}>ID: {`${item.id}`}</Typography>
							<Typography className={classes.cardSubHead}>Mobile: {`${item.mobile}`}</Typography>
							</div>
						}
						/>
					</Card>
				</Grid>
			)
	}):this.state.filtered.map((item)=>{
		return(
			<Grid key={item.id} item xs={6} className={classes.leftGrid}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Link to={{
							pathname:'/patient',
							search:`${item.id}`
						}}><Avatar aria-label="Recipe" className={classes.avatar}>
						{`${item.firstname[0]}`+`${item.lastname[0]}`}
						</Avatar></Link>
					}
					action={
						<IconButton className={classes.iconBtn} onClick={this.handleClickdeletePatient}>
							<Cancel/>
						</IconButton>
					}
					title={
						<Link to={{
							pathname:'/patient',
							search:`${item.id}`
						}}><Typography className={classes.cardHead}>{`${item.firstname}`+" "+`${item.lastname}`}</Typography></Link>
					}

					subheader={
						<div>
						<Typography className={classes.cardSubHead}>ID: {`${item.id}`}</Typography>
						<Typography className={classes.cardSubHead}>Mobile: {`${item.mobile}`}</Typography>
						</div>
					}
					/>
				</Card>
				
				
			</Grid>
		)
});
	//const filteredItems =
    return (
		<div className={classes.root}>
		<Grid container >
			<Grid item xs={6} className={classes.leftGrid}>
				<h2>Patients</h2>
			</Grid>
			<Grid item xs={6} className={classes.rightGrid}>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							onChange={this.searchKeywords}
							placeholder="Search ID or Name..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
			</Grid>
				{items}
		</Grid>
		<Dialog
					open={this.state.openAlert}
					onClose={this.handleClose}
					aria-labelledby="draggable-dialog-title"
				>
					<DialogTitle id="draggable-dialog-title" style={{ fontWeight:'bold'}}>Delete</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Are you sure? You want to Delete patient <Typography style={{fontWeight:'bold'}}>{this.state.patientName}?</Typography>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} className={classes.cancelButton}>
							Cancel
						</Button>
						<Button onClick={this.handleDelete} className={classes.deleteButton}>
							Delete
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					open={this.state.openDeleteSuccess}
					onClose={this.handleClose}
					aria-labelledby="draggable-dialog-title"
				>
					<DialogTitle id="draggable-dialog-title" style={{ fontWeight:'bold'}}>Delete</DialogTitle>
					<DialogContent>
						<DialogContentText>
							The Patient has been deleted!
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} className={classes.cancelButton}>
							OK
						</Button>
					</DialogActions>
				</Dialog>
		</div>
      );
  }
}
Patient.propTypes = {
	classes: PropTypes.object.isRequired,
};
function mapStateToProps(state){
	console.log(state.user)
	return{
		user:state.user
	}
}

export default connect(mapStateToProps)(withStyles(styles)(Patient));
