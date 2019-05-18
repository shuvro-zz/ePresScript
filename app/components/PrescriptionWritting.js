import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/CancelOutlined';
import Check from "@material-ui/icons/Check";
import Info from "@material-ui/icons/info";
import CCData from '../fakedata/cc_fake.json';
import TestsData from '../fakedata/Tests_fake.json';
import DiagnosisData from '../fakedata/diagnosis_fake.json';
import TreatmentData from '../fakedata/Treatment_fake.json';
//import MedData from '../fakedata/med_fake.json';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Assignment from '@material-ui/icons/Assignment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import {setPatientPatientId} from "../features/prescription";

let update = require('immutability-helper');

const styles = theme => ({
  root:{
    padding: '1%',
    backgroundColor: '#f0f1f6',
    paddingTop: '70px',
    height:'100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  medtextField:{
    width:'80%',
    margin:'0px',
    padding:'0px'
  },
  adviceTextField:{
    width:'95%',
    margin:'0px',
    padding:'0px'
  },
  card: {
    width: '100%',
  },
  customCard:{
    width:'100%',
    marginTop:'20px',
    padding:'0px'
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
  searchKeyword:{
    cursor:'pointer',
    borderBottom:'1px solid #D1D2D7',
    '&:hover': {
      color: '#59B0F6',
    },
    marginLeft:'-5px',
    padding:'5px 0px',
    width:'90%'
  },
  suggestionAdd:{
    background:'#f2f2f2',
    marginTop:'-10px',
    padding:'10px',
    cursor:'pointer',
    '&:hover': {
      background: '#f9f9f9',
    },

  }
});


class PrescriptionWrittng extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ccFakeData: CCData,
      ccFiltered:[],
      list:[],
      value:'',
      ccOnChange: false,
      ccFinalList:[],

      TestsFakeData: TestsData,
      TestsFiltered:[],
      Testsvalue:'',
      Testslist:[],
      TestsOnChange: false,

      DiagnosisFakeData: DiagnosisData,
      DiagnosisFiltered:[],
      Diagnosisvalue:'',
      Diagnosislist:[],
      DiagnosisOnChange: false,

      OEvalue:'',
      OElist:[],

      AdviceValue:'',

      TempMedValue:'',
      MedOnchange:false,
      MedData: [],
      MedFiltered:[],
      MedList:[],
      MedFlag:false,

      TempStrenValue:'',
      StrenList:[],
      //StrenOnchange:false,
      TempTypValue:'',
      TypeList:[],
      //TypOnchange:false,
      TempFreqValue:'',
      FreqList:[],
      //FreqOnchange:false,
      TempRemValue:'',
      RemList:[],
      //RemOnchange:false,

      SuggestionsData: TreatmentData,
      SuggestionOn:false,
      SuggestionsFiltered:[],

      expanded: {},
      openSnackbarCC: false,
      SnackbarMessage:'',
      PatientName: '',
      Age: '',
      Sex: '',
      Mobile: '',
      Email: '',
      PatientId: ''
    };
  }

  componentDidMount(){
    console.log(this.props.prescriptionState.cc);
    const {cc } = this.props.prescriptionState;
    console.log(cc);
    let medicineData = this.props.medicineState.medicineList;
    console.log(medicineData)
    this.setState({
      list : cc,
      MedData:medicineData
    });
  }
  handlePatientDetailChange=(event)=>{
    let value = event.target.value;
    let id = event.target.id;
    switch (id) {
      case 'PatientName': this.props.setPatientName(value);  break;
      case 'Age': this.props.setPatientAge(value);  break;
      case 'Sex': this.props.setPatientSex(value);  break;
      case 'Mobile': this.props.setPatientMobile(value);  break;
      case 'Email': this.props.setPatientEmail(value);  break;
      case 'PatientId': this.props.setPatientPatientId(value);  break;
      default : break;
    }
    this.setState({ [id]: value });
  };


  handleSnackbar=(msg)=>{
    this.setState({
      openSnackbarCC:true,
      SnackbarMessage:msg
    })
  };
  handleCloseSnackbar = () => {
    this.setState({ openSnackbarCC: false });
  };

  handleExpandClick = (val) => {
    console.log(val);
    this.setState({
      expanded: {...this.state.expanded,
        [val]: !this.state.expanded[val]},
      //expanded[val]: !state.expanded[val]
    });
    console.log(this.state.expanded[0]);
  };
  handleSelectionClick = (val,value) => {
    console.log(val);
    let Index1 = this.state.SuggestionsData.findIndex(function(c) {
      return c.treatment_id === value;
    });
    let Index2 = this.state.SuggestionsData[Index1].treatment_medicine_list.findIndex(function(x){
      return x.medicine_id === val;
    })
    let bool = !this.state.SuggestionsData[Index1].treatment_medicine_list[Index2].checked;

    let updatedCheck = update(this.state.SuggestionsData[Index1].treatment_medicine_list[Index2], {checked: {$set: bool}});
    //console.log(updatedCheck);
    let data = this.state.SuggestionsData;
    let newData = update(data[Index1], {treatment_medicine_list: {[Index2]: {$set: updatedCheck}}});

    let uData = update(data,{$splice:[[Index1,1,newData]]});

    this.setState({SuggestionsData:uData});

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
  onRemoveDiagnosis = i => {
    let x = (this.state.Diagnosislist.length - i)-1;
    console.log(x);
    this.setState(state => {
      const Diagnosislist = state.Diagnosislist.filter((item, j) => x !== j);
      return {
        Diagnosislist,
      };
    });
  };
  removeAll = i =>{
    let x =  i;
    console.log(x);
    this.setState(state => {
      const MedList = state.MedList.filter((item, j) => x !== j);
      const StrenList = state.StrenList.filter((item, j) => x !== j);
      const TypeList = state.TypeList.filter((item, j) => x !== j);
      const FreqList = state.FreqList.filter((item, j) => x !== j);
      const RemList = state.RemList.filter((item, j) => x !== j);
      return {
        MedList,
        StrenList,
        TypeList,
        FreqList,
        RemList,
      };
    });
  };

  addCustomClinicalComplain = () => {
    let customItemValue = this.state.value;
    let latestId = `${this.state.ccFakeData.length + 1}`;
    let fl = 1;
    let loopCC = this.state.list.map((j)=>{
      if(j.name.toUpperCase() === customItemValue.toUpperCase()){
        fl = 0;
      }
    });
    if(fl==1){
      this.setState((prevState) => ({
        list: [...prevState.list, {name:customItemValue, id: latestId }],
        ccFakeData : [...prevState.ccFakeData, {name:customItemValue, id: latestId }],
        value:''
      }));
      const newClinicalCompain = { name : customItemValue, id : latestId};
      this.props.setCC(newClinicalCompain);
    }else{
      let msg = "This C/C Already Exists!";
      this.handleSnackbar(msg);
    }
  };
  addCustomOE=()=>{
    let customItemValue = this.state.OEvalue;
    let fl = 1;
    let loopOE = this.state.OElist.map((j)=>{
      if(j.name.toUpperCase() == customItemValue.toUpperCase()){
        fl = 0;
      }
    })
    if(fl==1){
      let latestId = `${this.state.OElist.length + 1}`;
      this.setState((prevState) => ({
        OElist: [...prevState.OElist, {name:customItemValue, id: latestId }],
        //ccFakeData : [...prevState.ccFakeData, {name:customItemValue, id: latestId }],
        OEvalue:''
      }));
    }
    else{
      let msg = "This O/E Already Exists!";
      this.handleSnackbar(msg);
    }
  }
  addCustomTests=()=>{
    let customItemValue = this.state.Testsvalue;
    let fl = 1;
    let loopTests = this.state.Testslist.map((j)=>{
      if(j.name.toUpperCase() == customItemValue.toUpperCase()){
        fl = 0;
      }
    })
    if(fl==1){
      let latestId = `${this.state.Testslist.length + 1}`;
      this.setState((prevState) => ({
        Testslist: [...prevState.Testslist, {name:customItemValue, id: latestId }],
        TestsFakeData : [...prevState.TestsFakeData, {name:customItemValue, id: latestId }],
        Testsvalue:''
      }));
    }else{
      let msg = "This Test Already Exists!";
      this.handleSnackbar(msg);
    }
  }
  addCustomDiagnosis=()=>{
    let customItemValue = this.state.Diagnosisvalue;
    let fl = 1;
    let loopDiag = this.state.Diagnosislist.map((j)=>{
      if(j.name.toUpperCase() == customItemValue.toUpperCase()){
        fl = 0;
      }
    })
    if(fl==1){
      let latestId = `${this.state.Diagnosislist.length + 1}`;
      this.setState((prevState) => ({
        Diagnosislist: [...prevState.Diagnosislist, {name:customItemValue, id: latestId }],
        DiagnosisFakeData : [...prevState.DiagnosisFakeData, {name:customItemValue, id: latestId }],
        Diagnosisvalue:''
      }));
      this.handleAddSuggestion(customItemValue);
    }else{
      let msg = "This Diagnosis Already Exists!";
      this.handleSnackbar(msg);
    }
  }
  addCC=(item)=>{
    console.log(this.props.treatmentState);
    console.log(this.state);
    let itemName = item.name;
    let fl = 1;
    let loopCC = this.state.list.map((j)=>{
      if(j.name.toUpperCase() === itemName.toUpperCase()){
        fl = 0;
      }
    });
    if(fl==1){
      this.setState((prevState) => ({
        list: [...prevState.list, {name:item.name, id:item.id}],
        value:''
      }));
    }else{
      let msg = "This C/C Already Exists!";
      this.handleSnackbar(msg);
    }
  };
  addTests=(item)=>{
    let itemName = item.name;
    let fl = 1;
    let loopTests = this.state.Testslist.map((j)=>{
      if(j.name.toUpperCase() == itemName.toUpperCase()){
        fl = 0;
      }
    })
    if(fl==1){
      this.setState((prevState) => ({
        Testslist: [...prevState.Testslist, {name:item.name, id:item.id}],
        Testsvalue:''
      }));
    }
    else{
      let msg = "This Test Already Exists!";
      this.handleSnackbar(msg);
    }
  };
  addDiagnosis=(item)=>{
    let itemName = item.name;
    let fl = 1;
    let loopDiagnosis = this.state.Diagnosislist.map((j)=>{
      if(j.name.toUpperCase() == itemName.toUpperCase()){
        fl = 0;
      }
    })
    if(fl==1){
      this.setState((prevState) => ({
        Diagnosislist: [...prevState.Diagnosislist, {name:item.name, id:item.id}],
        Diagnosisvalue:''
      }));
      this.handleAddSuggestion(1);
    }
    else{
      let msg = "This Diagnosis Already Exists!";
      this.handleSnackbar(msg);
    }
  };
  addMed=(item)=>{
    //console.log(item);
    this.setState({
      TempMedValue:`${item.product_name}`,
      TempStrenValue:`${item.strength}`,
      TempTypValue:`${item.types}`,
      MedFlag:true
    });
    //console.log(this.state.TempMedValue);
  };
  addAll=()=>{
    let MedVal = this.state.TempMedValue;
    let StrenVal = this.state.TempStrenValue;
    if(StrenVal == '')StrenVal = "N/A";

    let TypVal = this.state.TempTypValue;
    if(TypVal == '')TypVal = "N/A";

    let RemVal = this.state.TempRemValue;
    if(RemVal == '')RemVal = "N/A";

    let FreqVal = this.state.TempFreqValue;
    if(FreqVal == '')FreqVal = "N/A";

    let fl = 1;
    let loopMed = this.state.MedList.map((j)=>{
      if(j.name.toUpperCase() == MedVal.toUpperCase()){
        fl = 0;
      }
    })

    let loopStren = this.state.StrenList.map((k)=>{
      if(k.name.toUpperCase() == MedVal.toUpperCase()){
        fl = 0;
      }
    })
    if(fl == 1){
      let latestId = `${this.state.MedList.length + 1}`;
      this.setState((prevState) => ({
        MedList: [...prevState.MedList, {name:MedVal, id: latestId }],
        StrenList: [...prevState.StrenList, {name:StrenVal, id: latestId }],
        TypeList: [...prevState.TypeList, {name:TypVal, id: latestId }],
        FreqList: [...prevState.FreqList, {name:FreqVal, id: latestId }],
        RemList: [...prevState.RemList, {name:RemVal, id: latestId }],
        //TestsFakeData : [...prevState.TestsFakeData, {name:customItemValue, id: latestId }],
        TempMedValue:'',
        TempFreqValue:'',
        TempRemValue:'',
        TempStrenValue:'',
        TempTypValue:'',

      }));
    }
    else{
      let msg = "Already Exists!";
      this.handleSnackbar(msg);
    }
    //console.log(this.state);
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
  onUpdateDiagnosis = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.Diagnosislist;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({Diagnosislist: newData});
  };
  onUpdateMed = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.MedList;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({MedList: newData});
  };
  onUpdateStren = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.StrenList;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({StrenList: newData});
  };
  onUpdateType = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.TypeList;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({TypeList: newData});
  };
  onUpdateFreq = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.FreqList;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({FreqList: newData});
  };
  onUpdateRem = (val) => {
    let target = val.target;
    let value = target.value;
    let id = target.id;
    let data = this.state.RemList;
    //get index of the object using ID
    let commentIndex = data.findIndex(function(c) {
      return c.id === target.id;
    });
    //update this object with new values
    let updatedComment = update(data[commentIndex], {name: {$set: value} , id:{$set: id}});

    let newData = update(data, {
      $splice: [[commentIndex, 1, updatedComment]]
    });
    this.setState({RemList: newData});
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
  DiagnosisSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({DiagnosisOnChange:true})
    if( keyword == ""){
      this.setState({DiagnosisOnChange:false})
    }
    this.setState({ Diagnosisvalue: event.target.value });
    let filtered = this.state.DiagnosisFakeData.filter((item)=>{
      return item.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1;
    });
    this.setState({
      DiagnosisFiltered:filtered,
      DiagnosisOnChange:true
    })
  };
  AdviceSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({AdviceValue:keyword});
  };
  OEsearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({OEvalue:keyword});
  };
  MedSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({MedOnchange:true, MedFlag:false})
    if( keyword == ""){
      this.setState({MedOnchange:false})
    }
    this.setState({ TempMedValue: event.target.value });
    let filtered = this.state.MedData.filter((item)=>{
      return item.product_name.toUpperCase().indexOf(keyword.toUpperCase()) > -1;
    });
    this.setState({
      MedFiltered:filtered,
      MedOnchange:true
    })
  };
  StrenSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({TempStrenValue:keyword});
  };
  TypeSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({TempTypValue:keyword});
  };
  FreqSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({TempFreqValue:keyword});
  };
  RemarkSearchKeywords = (event)=>{
    let keyword = event.target.value;
    this.setState({TempRemValue:keyword});
  };
  handleAddSuggestion = (value)=>{
    this.state.SuggestionOn = true;
    console.log("Suggestion added "+ value)
  }
  handleAddSuggestion2 = (val) =>{
    console.log(val);
    console.log(this.state.SuggestionsData);
    let filter = this.state.SuggestionsData.map((item)=>{

      if(item.treatment_id == val){
        let med = item.treatment_medicine_list.map((i)=>{
          if(i.checked === true){
            console.log(i.product_name);
            let MedVal = i.product_name;
            let StrenVal = i.strength;
            if(StrenVal == '')StrenVal = "N/A";

            let TypVal = i.type;
            if(TypVal == '')TypVal = "N/A";

            let RemVal = i.indication;
            if(RemVal == '')RemVal = "N/A";


            let FreqVal = i.frequency;
            if(FreqVal == '')FreqVal = "N/A";
            let fl = 1;
            let loopMed = this.state.MedList.map((j)=>{
              if(j.name.toUpperCase() == MedVal.toUpperCase()){
                fl = 0;
              }
            })

            let loopStren = this.state.StrenList.map((k)=>{
              if(k.name.toUpperCase() == MedVal.toUpperCase()){
                fl = 0;
              }
            })
            if(fl == 1){
              let latestId = `${this.state.MedList.length + 1}`;
              this.setState((prevState) => ({
                MedList: [...prevState.MedList, {name:MedVal, id: latestId }],
                StrenList: [...prevState.StrenList, {name:StrenVal, id: latestId }],
                TypeList: [...prevState.TypeList, {name:TypVal, id: latestId }],
                FreqList: [...prevState.FreqList, {name:FreqVal, id: latestId }],
                RemList: [...prevState.RemList, {name:RemVal, id: latestId }],

                TempMedValue:'',
                TempFreqValue:'',
                TempRemValue:'',
                TempStrenValue:'',
                TempTypValue:'',

              }));
            }
            else{
              let msg = "Already exists in the prescription!";
              this.handleSnackbar(msg);
            }
          }
        });
      }
    })
  }
  render(){
    console.log(this.props);
    const {
      patientName,
      patientAge,
      patientSex,
      patientMobile,
      patientEmail,
      patientPatientId , cc} = this.props.prescriptionState;

    const listCopy = this.state.list;
    const OElistCopy = this.state.OElist;
    const TestlistCopy = this.state.Testslist;
    const DiagnosislistCopy = this.state.Diagnosislist;
    const MedListCopy = this.state.MedList;
    const StrenListCopy = this.state.StrenList;
    const TypeListCopy = this.state.TypeList;
    const FreqListCopy = this.state.FreqList;
    const RemListCopy = this.state.RemList;

    const { classes } = this.props;
    const CC = this.state.ccOnChange?this.state.ccFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addCC(item)} className={classes.searchKeyword}>
          {item.name}
        </li>
      )
    }):null;
    const TESTS = this.state.TestsOnChange?this.state.TestsFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addTests(item)} className={classes.searchKeyword}>
          {item.name}
        </li>
      )
    }):null;
    const Diagnosis = this.state.DiagnosisOnChange?this.state.DiagnosisFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addDiagnosis(item)} className={classes.searchKeyword}>
          {item.name}
        </li>
      )
    }):null;
    const Med = this.state.MedOnchange?this.state.MedFiltered.map((item)=>{
      return(
        <li key={item.id} onClick={()=>this.addMed(item)} className={classes.searchKeyword}>
          {item.product_name}
        </li>
      )
    }):null;
    const SuggestionShow = this.state.SuggestionOn?this.state.Diagnosislist.map((item)=>{
      let val = item.name;
      return(
        this.state.SuggestionsData.map((i)=>{
          if(val.toUpperCase() == i.name.toUpperCase()){
            console.log("hi");
            return(
              <Card className={classes.customCard} key={i.treatment_id}>
                <CardHeader
                  style={{
                    padding:'10px'
                  }}
                  avatar={
                    <Assignment style={{color:'blue'}}/>
                  }
                  action={
                    <CardActions className={classes.actions} disableActionSpacing>
                      <IconButton
                        className={classnames(classes.expand, {
                          [classes.expandOpen]: this.state.expanded[i.treatment_id],
                        })}
                        onClick={()=>this.handleExpandClick(i.treatment_id)}
                        aria-expanded={this.state.expanded[i.treatment_id]}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon style={{color:'blue'}}/>
                      </IconButton>
                    </CardActions>
                  }
                  title= {
                    <h5 style={{marginLeft:'-10px'}}>Treatment for {`${val}`}</h5>
                  }
                />

                <Button style={{color:'blue'}} onClick={()=>this.handleAddSuggestion2(i.treatment_id)}>Add</Button>

                <Collapse  in={this.state.expanded[i.treatment_id]} timeout="auto" unmountOnExit>
                  <div style={{marginLeft:'-30px', padding:'5px'}}>
                    <ul style={{margin:'0px',}}>
                      {i.treatment_medicine_list.map((med)=>{
                        console.log(med.product_name);
                        return(
                          <li key={med.medicine_id} style={{marginBottom:"5px"}}>
                            {/*<h5>{`${med.product_name}`}</h5>*/}
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={med.checked}
                                  onChange={()=>this.handleSelectionClick(med.medicine_id, i.treatment_id)}

                                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                                  //value="checkedI"
                                />
                              }
                              label={`${med.product_name}`}
                            />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Collapse>
              </Card>
            )
          }
        })
      )
    }):null;
    return (
      <div className={classes.root}>
        <Card>
          <Grid container style={{width:'100%',padding:'0% 1%',borderBottom:'1px solid #D1D2D7'}}>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid item xs={3}>
                <TextField
                  id="PatientName"
                  label="Patient Name"
                  className={classes.textField}
                  value={patientName}
                  onChange={this.handlePatientDetailChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="Age"
                  label="Age"
                  className={classes.textField2}
                  value={patientAge}
                  onChange={this.handlePatientDetailChange}
                  margin="normal"
                />
                <TextField
                  id="Sex"
                  label="Sex"
                  className={classes.textField2}
                  value={patientSex}
                  onChange={this.handlePatientDetailChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="Mobile"
                  label="Mobile"
                  className={classes.textField}
                  value={patientMobile}
                  onChange={this.handlePatientDetailChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="Email"
                  label="Email"
                  className={classes.textField}
                  value={patientEmail}
                  onChange={this.handlePatientDetailChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="PatientId"
                  label="Id"
                  className={classes.textField}
                  value={patientPatientId}
                  onChange={this.handlePatientDetailChange}
                  margin="normal"
                />
              </Grid>
            </form>
          </Grid>
          <Grid container >
            <Grid item xs={2} className={classes.leftGrid} style={{ height:'100%',paddingRight:'0px'}}>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>C/C</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'20%',position:'relative',overflowY:'auto'}}>
                <TextField
                  id="standard-name"
                  label="Add New"
                  className={classes.cctextField}
                  value={this.state.value}
                  onChange={this.CCsearchKeywords}
                  margin="normal"
                  style={{fontSize:'14px'}}
                />
                <IconButton
                  onClick={this.addCustomClinicalComplain}
                  disabled={!this.state.value}
                  style={{marginTop:'-40px',marginLeft:'70%'}}
                >
                  <Check style={{color:'#7f7f7f'}}/>
                </IconButton>
                {!this.state.value==""?
                  <div style={{maxHeight:'200px', width:'90%', position:'relative', overflow:'auto',padding:'0px',marginTop:'-15px'}}>
                    <ul style={{marginLeft:'-35px',marginTop:'-1px'}}>
                      {!this.state.value==""?CC:null}
                    </ul>
                  </div>:null
                }
                {cc != null ?
                  cc.slice(0).reverse().map((itemx,index) => (
                    <div key={index} style={{margin:'0px', padding:'0px'}}>
                      <TextField
                        id={itemx.id}
                        multiline
                        className={classes.cctextField}
                        name={`${index}`}
                        value={itemx.name}
                        onChange={this.onUpdateItem.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px',marginTop:'-15px'}}
                      />
                      <IconButton
                        onClick={() => this.onRemoveItem(index)}
                        style={{marginTop:'-45px',marginLeft:'70%'}}
                      >
                        <Cancel  style={{color:'#7f7f7f', fontSize:'20px'}}/>
                      </IconButton>
                    </div>
                  )) : null}
              </div>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>O/E</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'20%',position:'relative',overflowY:'auto'}}>
                <TextField
                  id=""
                  label="Add New"
                  multiline
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
                        multiline
                        className={classes.cctextField}
                        name={`${index}`}
                        value={itemx.name}
                        onChange={this.onUpdateOE.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px',marginTop:'-17px'}}
                      />
                      <IconButton
                        onClick={() => this.onRemoveOE(index)}
                        style={{marginTop:'-45px',marginLeft:'70%'}}
                      >
                        <Cancel  style={{color:'#7f7f7f', fontSize:'18px',marginTop:'-5px'}}/>
                      </IconButton>
                    </div>
                  )) : null}
              </div>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>Diagnosis</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'20%',position:'relative',overflowY:'auto'}}>
                <TextField
                  id="Diagnosis"
                  label="Add Diagnosis"
                  className={classes.cctextField}
                  value={this.state.Diagnosisvalue}
                  onChange={this.DiagnosisSearchKeywords}
                  margin="normal"
                  style={{fontSize:'14px'}}
                />
                <IconButton
                  onClick={this.addCustomDiagnosis}
                  disabled={!this.state.Diagnosisvalue}
                  style={{marginTop:'-45px',marginLeft:'70%'}}
                >
                  <Check style={{color:'#7f7f7f'}}/>
                </IconButton>
                {!this.state.Diagnosisvalue==""?
                  <div style={{maxHeight:'200px', width:'90%', position:'relative', overflow:'auto',padding:'0px',marginTop:'-15px'}}>
                    <ul style={{marginLeft:'-35px',marginTop:'-1px'}}>
                      {!this.state.Diagnosisvalue==""?Diagnosis:null}
                    </ul>
                  </div>:null
                }
                {DiagnosislistCopy != null ?
                  DiagnosislistCopy.slice(0).reverse().map((itemx,index) => (
                    <div key={index} style={{margin:'0px', padding:'0px'}}>
                      <TextField
                        id={itemx.id}
                        multiline
                        className={classes.cctextField}
                        name={`${index}`}
                        value={itemx.name}
                        onChange={this.onUpdateDiagnosis.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px',marginTop:'-15px'}}
                      />
                      <IconButton
                        onClick={() => this.onRemoveDiagnosis(index)}
                        style={{marginTop:'-40px',marginLeft:'70%'}}
                      >
                        <Cancel  style={{color:'#7f7f7f', fontSize:'18px',marginTop:'-5px'}}/>
                      </IconButton>
                    </div>
                  )) : null}
              </div>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>Tests</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'20%',position:'relative',overflowY:'auto'}}>
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
                  style={{marginTop:'-45px',marginLeft:'70%'}}
                >
                  <Check style={{color:'#7f7f7f'}}/>
                </IconButton>
                {!this.state.Testsvalue==""?
                  <div style={{maxHeight:'200px', width:'90%', position:'relative', overflow:'auto',padding:'0px',marginTop:'-15px'}}>
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
                        multiline

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
                        <Cancel  style={{color:'#7f7f7f', fontSize:'18px',marginTop:'-5px'}}/>
                      </IconButton>
                    </div>
                  )) : null}
              </div>
              <Typography style={{marginTop:'5px', color:'#7f7f7f', fontWeight:'bold'}}>Advice</Typography>
              <div style={{margin:'0px',marginTop:'-5px',padding:'0px', height:'20%',position:'relative',overflowY:'auto'}}>
                <TextField
                  id="advice"
                  label="Add Advice"
                  multiline
                  rowsMax="3"
                  value={this.state.AdviceValue}
                  onChange={this.AdviceSearchKeywords}
                  className={classes.adviceTextField}
                  margin="normal"
                  style={{fontSize:'14px',marginTop:'-3px'}}
                />
              </div>
            </Grid>
            <Grid item xs={7} className={classes.leftGrid} >
              {MedListCopy != null ?
                MedListCopy.map((itemx,index) => (
                  <Grid container key={index} style={{marginTop:'10px'}}>
                    <Grid item xs={3}>
                      <TextField
                        id={itemx.id}
                        name={`${index}`}
                        //label="Medicine Name"
                        className={classes.medtextField}
                        value={itemx.name}
                        onChange={this.onUpdateMed.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px'}}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        id={itemx.id}
                        name={`${index}`}
                        //label="Strength"
                        className={classes.medtextField}
                        value={StrenListCopy[index].name}
                        onChange={this.onUpdateStren.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px'}}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        id={itemx.id}
                        name={`${index}`}
                        //label="Type"
                        className={classes.medtextField}
                        value={TypeListCopy[index].name}
                        onChange={this.onUpdateType.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px'}}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        id={itemx.id}
                        name={`${index}`}
                        //label="Frequency"
                        className={classes.medtextField}
                        value={FreqListCopy[index].name}
                        onChange={this.onUpdateFreq.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px'}}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id={itemx.id}
                        name={`${index}`}
                        //label="Remark"
                        className={classes.medtextField}
                        value={RemListCopy[index].name}
                        onChange={this.onUpdateRem.bind(this)}
                        margin="normal"
                        style={{fontSize:'14px'}}
                      />
                      <IconButton
                        onClick={() => this.removeAll(index)}
                        //disabled={!this.state.TempMedValue}
                        style={{marginTop:'-40px',marginLeft:'80%'}}
                      >
                        <Cancel style={{color:'#7f7f7f'}}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                ))
                : null}
              <Grid container>
                <Grid item xs={3}>
                  <TextField
                    id=""
                    label="Medicine Name"
                    className={classes.medtextField}
                    value={this.state.TempMedValue}
                    onChange={this.MedSearchKeywords}
                    margin="normal"
                    style={{fontSize:'14px'}}
                  />
                  {!this.state.TempMedValue=="" && !this.state.MedFlag?
                    <div style={{maxHeight:'200px', width:'90%', position:'relative', overflow:'auto',padding:'0px',marginTop:'0px'}}>
                      <ul style={{marginLeft:'-35px',marginTop:'-1px'}}>
                        {!this.state.TempMedValue=="" && !this.state.MedFlag?Med:null}
                      </ul>
                    </div>:null
                  }
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="strength"
                    label="Strength"
                    className={classes.medtextField}
                    value={this.state.TempStrenValue}
                    onChange={this.StrenSearchKeywords}
                    margin="normal"
                    style={{fontSize:'14px'}}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="type"
                    label="Type"
                    className={classes.medtextField}
                    value={this.state.TempTypValue}
                    onChange={this.TypeSearchKeywords}
                    margin="normal"
                    style={{fontSize:'14px'}}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="frequency"
                    label="Frequency"
                    className={classes.medtextField}
                    value={this.state.TempFreqValue}
                    onChange={this.FreqSearchKeywords}
                    margin="normal"
                    style={{fontSize:'14px'}}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="remark"
                    label="Remark"
                    className={classes.medtextField}
                    value={this.state.TempRemValue}
                    onChange={this.RemarkSearchKeywords}
                    margin="normal"
                    style={{fontSize:'14px'}}
                  />
                  <IconButton
                    onClick={this.addAll}
                    disabled={!this.state.TempMedValue}
                    style={{marginTop:'-40px',marginLeft:'80%'}}
                  >
                    <Check style={{color:'#7f7f7f'}}/>
                  </IconButton>
                </Grid>
              </Grid>

            </Grid>
            <Grid item xs={3} className={classes.rightGrid}>
              <Info style={{fontSize:'18px',color:'orange'}}/>
              <h5 style={{marginTop:'-21px',marginLeft:'31px'}}>Suggestions</h5>
              {SuggestionShow}
            </Grid>
          </Grid>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSnackbarCC}
          autoHideDuration={3000}
          onClose={this.handleCloseSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.SnackbarMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
PrescriptionWrittng.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(PrescriptionWrittng));
