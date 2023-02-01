import axios from 'axios';

const PRE_API_URL = 'http://20.229.182.95:9080//api_jsonrpc.php';

const PRE_API_TOKEN = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b';

export function LogInApi(_pro_Url: string | null = null) {
	return axios.post(_pro_Url || PRE_API_URL, {
		jsonrpc: '2.0',
		method: 'user.login',
		params: {
			user: 'Admin',
			password: 'zabbix'
		},
		id: 1,
		auth: null
	});
}

export function FetchHosts(_pro_Url: string | null = null, _pro_Token: string | null = null) {
	return axios.post(_pro_Url || PRE_API_URL, {
		jsonrpc: '2.0',
		method: 'host.get',
		params: {
			output: ['name', 'hostid'],
			selectInterfaces: ['ip'],
			selectItems: ['name', 'lastvalue'],
			selectGraphs: 'extend',
			selectGroups: ['name'],
			selectTriggers: 'extend',
			selectDashboards: 'extend'
		},
		auth: _pro_Token || PRE_API_TOKEN,
		id: 1
	});
}

export function FetchGroups(_pro_Url: string | null = null, _pro_Token: string | null = null) {
	return axios.post(_pro_Url || PRE_API_URL, {
		jsonrpc: '2.0',
		method: 'hostgroup.get',
		params: {
			output: ['name']
		},
		auth: _pro_Token || PRE_API_TOKEN,
		id: 1
	});
}

export default { LogInApi, FetchHosts, FetchGroups };
