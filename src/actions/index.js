import tableBar from '../components/tableBar/action';
const userinfo = {
	set_userinfo(userinfo) {
		return {
			type: "USER_INFO",
			userinfo
		};
	}
};

const actions = {
	...userinfo,
	...tableBar
}

export default actions;