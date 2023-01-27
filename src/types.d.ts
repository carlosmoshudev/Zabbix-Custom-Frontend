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

export type HostHealthInfo = {
	ping: string;
	ip: string;
	cpu: { usage: string; style: string };
	memory: { usage: string; style: string };
	system: SystemResources;
	monitoring: MonitoringStatus;
};

export type SystemResources = {
	cpuCores: string;
	memoryGB: string;
	systemArchitecture: string;
	systemOS: string;
	DiskSpace: string;
};

export type MonitoringStatus = {
	upTime: string;
	bootTime: string;
	interrupts: string;
	users: string;
	process: string;
};
