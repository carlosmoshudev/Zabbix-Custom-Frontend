export interface IZabbixHostInfo {
	hostid: string;
	name: string;
	interfaces: IZabbixHostInterface[];
	items: IZabbixHostItem[];
	groups: IZabbixGroup[];
	graphs: IZabbixGraph[];
}

export interface IZabbixHostInterface {
	ip: string;
}

export interface IZabbixHostItem {
	name: string;
	lastvalue: string;
}

export interface IZabbixGroup {
	name: string;
}

export interface IZabbixGraph {
	graphid: string;
	name: string;
}
