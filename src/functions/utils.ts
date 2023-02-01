import type { IZabbixHostItem } from '../zabbix_interfaces';

export function CheckHostItem(hostItems: Array<IZabbixHostItem>, itemName: string): boolean {
	return hostItems.some((item) => item.name === itemName);
}
