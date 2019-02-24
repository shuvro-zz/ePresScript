export default function(state={},action){
	switch(action.type){
		case "TREATMENT_POST_ADDED":
			return {...state, treatmentPost:action.payload}
		default:
			return state;
	}
}