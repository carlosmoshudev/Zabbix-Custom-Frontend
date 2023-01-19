import axios from 'axios';

export function login(ZabbixApiUrl: string) {
	return axios.post(ZabbixApiUrl, {
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

export function getHosts(token: string, ZabbixApiUrl: string) {
	return axios.post(ZabbixApiUrl, {
		jsonrpc: '2.0',
		method: 'host.get',
		params: {
			output: ['name', 'hostid'],
			selectInterfaces: ['ip'],
			selectItems: ['name', 'lastvalue'],
			selectGraphs: ['name'],
			selectGroups: ['name']
		},
		auth: token,
		id: 1
	});
}

export function getHostGroups(token: string, ZabbixApiUrl: string) {
	return axios.post(ZabbixApiUrl, {
		jsonrpc: '2.0',
		method: 'hostgroup.get',
		params: {
			output: ['name']
		},
		auth: token,
		id: 1
	});
}

export function getGraphs(token: string, ZabbixApiUrl: string, graphid: string) {
	return axios.post(ZabbixApiUrl, {
		jsonrpc: '2.0',
		method: 'graph.get',
		params: {
			output: 'extend',
			graphids: graphid
		},
		auth: token,
		id: 1
	});
}