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
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Cancel from '@material-ui/icons/Cancel';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase/InputBase";
import PatientData from '../fakedata/patient_fake.json';
const styles = theme => ({
	root:{
		padding:'5%',
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
		fontSize:'25px'
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
	},
	cardSubHead:{
		color:'#BBBBBB',
		fontSize:'14px',
	}
});  

class Patient extends React.Component{
	state = {
		expanded: false,
		patients: PatientData,
		filtered:[],
		searching:false
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
				<Link to={{
					pathname:'/patient',
					search:`${item.id}`
				}}><Card className={classes.card}>
					<CardHeader 
						avatar={
							<Avatar aria-label="Recipe" className={classes.avatar}>
							{`${item.firstname[0]}`+`${item.lastname[0]}`}
							</Avatar>
						}
						action={
							<IconButton className={classes.iconBtn}>
								<Cancel/>
							</IconButton>
						}
						title={
							<Typography className={classes.cardHead}>{`${item.firstname}`+" "+`${item.lastname}`}</Typography>
						}
	
						subheader={
							<div>
							<Typography className={classes.cardSubHead}>ID: {`${item.id}`}</Typography>
							<Typography className={classes.cardSubHead}>Mobile: {`${item.mobile}`}</Typography>
							</div>
						}
						/>
					</Card></Link>
				</Grid>
			)
	}):this.state.filtered.map((item)=>{
		return(
			<Grid key={item.id} item xs={6} className={classes.leftGrid}>
			<Link to={`/patient/${item.id}`}><Card className={classes.card}>
				<CardHeader 
					avatar={
						<Avatar aria-label="Recipe" className={classes.avatar}>
						{`${item.firstname[0]}`+`${item.lastname[0]}`}
						</Avatar>
					}
					action={
						<IconButton className={classes.iconBtn}>
							<Cancel/>
						</IconButton>
					}
					title={
						<Typography className={classes.cardHead}>{`${item.firstname}`+" "+`${item.lastname}`}</Typography>
					}

					subheader={
						<div>
						<Typography className={classes.cardSubHead}>ID: {`${item.id}`}</Typography>
						<Typography className={classes.cardSubHead}>Mobile: {`${item.mobile}`}</Typography>
						</div>
					}
					/>
				</Card></Link>
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