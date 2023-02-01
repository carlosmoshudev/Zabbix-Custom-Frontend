/*           Layout Types           */
export type LinkButtonPropertiesType = {
	Text: string;
	Link: string;
	Icon: string;
};

/*          Host Types          */
export type HostHealthInfoType = {
	Ping: string;
	IPAddress: string;
	CPU: UsageType;
	PhysicalMemory: UsageType;
	system: SystemResourcesType;
	monitoring: MonitoringStatusType;
};

export type SystemResourcesType = {
	cpuCores: string;
	memoryGB: string;
	systemArchitecture: string;
	systemOS: string;
	DiskSpace: string;
};

export type MonitoringStatusType = {
	upTime: string;
	bootTime: string;
	interrupts: string;
	users: string;
	process: string;
};

export type UsageType = {
	Usage: string;
	CSS: string;
};

export type ItemTarget = { Title: string; ItemCollection: Array<string> };
