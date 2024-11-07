<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	export let data;

	interface DashboardData {
		workOrders: WorkOrder[];
		metrics: Metrics;
		equipmentStatus: EquipmentStatus;
		user: User;
	}

	let workOrders: WorkOrder[];
	let metrics: Metrics;
	let equipmentStatus: EquipmentStatus;
	let user: User;
	$: ({ workOrders, metrics, equipmentStatus, user } = data as DashboardData);
</script>

<div class="container mx-auto space-y-6 p-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<h1 class="text-2xl font-bold">Dashboard</h1>
		<div class="flex items-center gap-4">
			<span>Welcome, {user.name}</span>
		</div>
	</div>

	<!-- Metrics Grid -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
		<Card class="p-4">
			<div class="text-sm text-muted-foreground">Open Work Orders</div>
			<div class="text-2xl font-bold">{metrics.openWorkOrders}</div>
		</Card>
		<Card class="p-4">
			<div class="text-sm text-muted-foreground">Completed Today</div>
			<div class="text-2xl font-bold">{metrics.completedToday}</div>
		</Card>
		<Card class="p-4">
			<div class="text-sm text-muted-foreground">PM Compliance</div>
			<div class="text-2xl font-bold">{metrics.pmCompliance}%</div>
		</Card>
		<Card class="p-4">
			<div class="text-sm text-muted-foreground">Avg Response Time</div>
			<div class="text-2xl font-bold">{metrics.avgResponseTime}</div>
		</Card>
	</div>

	<!-- Main Content -->
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
		<!-- Active Work Orders -->
		<Card class="col-span-2">
			<div class="border-b p-4">
				<h2 class="text-xl font-semibold">Active Work Orders</h2>
			</div>
			<div class="space-y-4 p-4">
				{#each workOrders as order}
					<div class="flex items-center justify-between rounded-lg bg-muted/10 p-3">
						<div>
							<div class="font-medium">{order.title}</div>
							<div class="text-sm text-muted-foreground">Due: {order.due}</div>
						</div>
						<Badge variant={order.priority === 'high' ? 'destructive' : 'default'}>
							{order.priority}
						</Badge>
					</div>
				{/each}
			</div>
		</Card>

		<!-- Equipment Status -->
		<Card>
			<div class="border-b p-4">
				<h2 class="text-xl font-semibold">Equipment Status</h2>
			</div>
			<div class="space-y-3 p-4">
				<div class="flex items-center justify-between">
					<span>Operational</span>
					<Badge variant="default">{equipmentStatus.operational}</Badge>
				</div>
				<div class="flex items-center justify-between">
					<span>Under Maintenance</span>
					<Badge variant="secondary">{equipmentStatus.underMaintenance}</Badge>
				</div>
				<div class="flex items-center justify-between">
					<span>Needs Attention</span>
					<Badge variant="warning">{equipmentStatus.needsAttention}</Badge>
				</div>
				<div class="flex items-center justify-between">
					<span>Offline</span>
					<Badge variant="destructive">{equipmentStatus.offline}</Badge>
				</div>
			</div>
		</Card>
	</div>
</div>
