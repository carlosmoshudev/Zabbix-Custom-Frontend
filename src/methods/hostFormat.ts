import type { ZabbixHost, HostHealthInfo, SystemResources, MonitoringStatus } from '../types';

export function Format(host: ZabbixHost): HostHealthInfo {
	return {
		ping: getPingStatus(host),
		ip: host.interfaces[0].ip,
		cpu: getCpuUtilization(host),
		memory: getMemoryUtilization(host),
		system: getSystemResources(host),
		monitoring: getMonitoringStatus(host)
	};
}

export function getPingStatus(host: ZabbixHost): string {
	let pingStatus = 'DOWN';
	for (const item of host.items) {
		if (item.name === 'ICMP ping') {
			if (item.lastvalue === '1') {
				pingStatus = 'OK';
			}
		}
	}
	for (const item of host.items) {
		if (item.name === 'Zabbix agent ping') {
			if (item.lastvalue === '1') {
				pingStatus = 'OK';
			}
		}
	}
	return pingStatus;
}

function getCpuUtilization(host: ZabbixHost): { usage: string; style: string } {
	let cpuUtilization = '0';
	for (const item of host.items) {
		if (item.name === 'CPU utilization') {
			cpuUtilization = Number(item.lastvalue).toFixed(2);
		}
	}
	const style = Number(cpuUtilization) > 80 || Number(cpuUtilization) === 0 ? 'DOWN' : 'OK';
	return {
		usage: cpuUtilization,
		style: style
	};
}

function getMemoryUtilization(host: ZabbixHost): { usage: string; style: string } {
	let memoryUtilization = '0';
	for (const item of host.items) {
		if (item.name === 'Memory utilization') {
			memoryUtilization = Number(item.lastvalue).toFixed(2);
		}
	}
	const style = Number(memoryUtilization) > 80 || Number(memoryUtilization) === 0 ? 'DOWN' : 'OK';
	return {
		usage: memoryUtilization,
		style: style
	};
}

function getSystemResources(host: ZabbixHost): SystemResources {
	let cpuCores = '0';
	let memoryGB = '0';
	let systemArchitecture = '0';
	let systemOS = '0';
	let DiskSpace = '0';
	let DiskUsedSpace = '0';

	for (const item of host.items) {
		if (item.name === 'Number of CPUs') {
			cpuCores = item.lastvalue;
		}
		if (item.name === 'Number of cores') {
			cpuCores = item.lastvalue;
		}
		if (item.name === 'Total memory') {
			memoryGB = Math.ceil(Number(item.lastvalue) / 1024 / 1024 / 1024).toString();
		}
		if (item.name === 'Operating system architecture') {
			systemArchitecture = item.lastvalue;
		}
		if (item.name === 'System description') {
			systemOS = item.lastvalue.split(' ')[0];
		}
		if (item.name.toLocaleLowerCase().includes('total space')) {
			DiskSpace = Math.ceil(Number(item.lastvalue) / 1024 / 1024 / 1024).toString();
		}
		if (item.name.toLocaleLowerCase().includes('used space')) {
			DiskUsedSpace = Math.ceil(Number(item.lastvalue) / 1024 / 1024 / 1024).toString();
		}
	}

	return {
		cpuCores: cpuCores,
		memoryGB: memoryGB + ' GB',
		systemArchitecture: systemArchitecture,
		systemOS: systemOS,
		DiskSpace: DiskUsedSpace + ' / ' + DiskSpace + ' GB'
	};
}

function getMonitoringStatus(host: ZabbixHost): MonitoringStatus {
	let upTime = '0';
	let bootTime = '0';
	let interrupts = '0';
	let users = '1';
	let process = '0';

	for (const item of host.items) {
		if (item.name.toLocaleLowerCase().includes('uptime')) {
			upTime = item.lastvalue;
		}
		if (item.name === 'System boot time') {
			bootTime = item.lastvalue;
		}
		if (item.name === 'Uptime') {
			bootTime = item.lastvalue;
		}
		if (item.name.toLocaleLowerCase().includes('per second')) {
			interrupts = item.lastvalue;
		}
		if (item.name === 'Number of logged in users') {
			users = item.lastvalue;
		}
		if (item.name === 'Number of processes') {
			process = item.lastvalue;
		}
	}

	return {
		upTime: upTime + ' sec',
		bootTime: bootTime + ' sec',
		interrupts: interrupts.split('.')[0],
		users: users,
		process: process
	};
}

export default Format;
