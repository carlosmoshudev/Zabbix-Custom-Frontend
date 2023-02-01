import type { ItemTarget } from '../types';

export const hostItemTargets: Array<ItemTarget> = [
	{
		Title: 'OS',
		ItemCollection: ['System description']
	},
	{
		Title: 'Process Count',
		ItemCollection: ['Number of processes']
	}
];

export const hostPingItemMatchers: Array<string> = ['Zabbix agent ping', 'ICMP ping'];
