import type { IZabbixHostItem } from '../zabbix_interfaces';
import { hostPingItemMatchers } from './api';

export const StatusTextByCode = {
	'1': 'Online',
	'0': 'Offline',
	na: 'Unknown'
};

export function Get_StatusText(statusItem: IZabbixHostItem): string {
	const status = statusItem.lastvalue;
	if (status !== '1' && status !== '0') {
		return StatusTextByCode['na'];
	}
	return StatusTextByCode[status];
}

export function Get_FirstWord(text: string): string {
	return text.split(' ')[0];
}

export function Has_PingItem(collection: Array<IZabbixHostItem>): boolean {
	const A = collection.filter((item) => ___matchName(item, 0)).length === 0;
	const B = collection.filter((item) => ___matchName(item, 1)).length === 0;
	return A && B;
}

function ___matchName(item: IZabbixHostItem, index: number): boolean {
	return item.name === hostPingItemMatchers[index];
}
