export const load = async () => {

  // to do: replace get user logic with actual logic to get current logged in user
  const getUser = async () => {
		await new Promise((resolve) => setTimeout(resolve, 100));
		return {
			name: 'John Doe',
			role: 'Maintenance Manager',
			avatar: '/avatar.jpg'
		};
	};

  const getNotifications = async () => {
		await new Promise((resolve) => setTimeout(resolve, 150));
		return [
			{ id: 1, message: 'Work Order #123 needs review', type: 'alert' },
			{ id: 2, message: 'PM due on Fermentation Tank 3', type: 'warning' }
		];
	};

	return {
		user: await getUser(),
		notifications: await getNotifications()
	};
}