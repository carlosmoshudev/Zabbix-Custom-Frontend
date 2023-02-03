import type { IZabbixHostItem } from '../types/$interfaces';

export function CheckHostItem(hostItems: Array<IZabbixHostItem>, itemName: string): boolean {
	return hostItems.some((item) => item.name === itemName);
}
