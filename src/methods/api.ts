import axios from 'axios';
const zabbix_api_url = 'http://20.229.182.95:9080//api_jsonrpc.php';
const zabbix_oauth_token = '712d00c487267e61984018e1528fa4b735819c9666a3d2cf3d628eee66a1185b';
export function LogInApi() {
	return axios.post(zabbix_api_url, {
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

export function FetchHosts(_t: string | null = null) {
	return axios.post(zabbix_api_url, {
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
		auth: _t || zabbix_oauth_token,
		id: 1
	});
}

export function FetchGroups(_t: string | null = null) {
	return axios.post(zabbix_api_url, {
		jsonrpc: '2.0',
		method: 'hostgroup.get',
		params: {
			output: ['name']
		},
		auth: _t || zabbix_oauth_token,
		id: 1
	});
}
