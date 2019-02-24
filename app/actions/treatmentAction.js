import DB from "../models";
const log = require('electron-log');

export function treatmentAction({name,description}){
	
    const request =  DB.Treatment.create({name:name,description:description});
  return{
		type:"TREATMENT_POST_ADDED",
		payload:request
	}
}