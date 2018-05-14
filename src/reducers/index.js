import tableBar from '../components/tableBar/reducer';

const userinfo = (state={},action)=>{
	switch(action.type) {
		case "USER_INFO":
		return Object.assign({}, state, {
			userinfo: action.userinfo
		});
		default:
		return state;
	}
}

let reducers = {
	userinfo,
	tableBar
};

export default reducers;