export const load = async ({ parent }) => {
	const parentData = await parent();

	const getActiveWorkOrders = async () => {
		await new Promise((resolve) => setTimeout(resolve, 200));
		return [
			{ id: 1, title: 'Repair Pump #2', priority: 'high', due: '2024-11-10' },
			{ id: 2, title: 'Inspect Cooling System', priority: 'medium', due: '2024-11-12' }
		];
	};

	const getMetrics = async () => {
		await new Promise((resolve) => setTimeout(resolve, 150));
		return {
			openWorkOrders: 12,
			completedToday: 5,
			pmCompliance: 87,
			avgResponseTime: '2.3 hours'
		};
	};

	const getEquipmentStatus = async () => {
		await new Promise((resolve) => setTimeout(resolve, 180));
		return {
			operational: 42,
			underMaintenance: 3,
			needsAttention: 2,
			offline: 1
		};
	};

	return {
		...parentData,
		workOrders: await getActiveWorkOrders(),
		metrics: await getMetrics(),
		equipmentStatus: await getEquipmentStatus()
	};
};
