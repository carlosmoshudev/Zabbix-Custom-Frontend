export type LinkButtonProps = {
	text: string;
	link: string;
	icon: string;
};

export interface ZabbixHost {
	hostid: string;
	name: string;
	interfaces: ZabbixInterface[];
	items: ZabbixItem[];
	groups: ZabbixGroup[];
	graphs: ZabbixGraph[];
}

export type ZabbixInterface = {
	ip: string;
};

export type ZabbixItem = {
	name: string;
	lastvalue: string;
};

export type ZabbixGroup = {
	name: string;
};

export type ZabbixGraph = {
	graphid: string;
	name: string;
};
