const initial = {
	index:0
}
const tableBar = (state=initial,action)=>{
	switch(action.type) {
		case "BAR_INDEX":
		return Object.assign({}, state, {
			index: action.index
		});
		default:
		return state;
	}
}
export default tableBar;
