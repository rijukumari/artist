import { useState, useEffect } from 'react';

export const useArtistCarousel = (users) => {
	const [activeId, setActiveId] = useState(users[0]?.id);
	const [direction, setDirection] = useState('left');

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveId((prevId) => {
				const currentIndex = users.findIndex((u) => u.id === prevId);
				const nextIndex = (currentIndex + 1) % users.length;
				setDirection(nextIndex >= users.length / 2 ? 'right' : 'left');
				return users[nextIndex].id;
			});
		}, 5000);
		return () => clearInterval(interval);
	}, [users]);

	const handleMouseEnter = (user) => {
		const newIndex = users.findIndex((u) => u.id === user.id);
		setDirection(newIndex >= users.length / 2 ? 'right' : 'left');
		setActiveId(user.id);
	};

	return {
		activeId,
		direction,
		handleMouseEnter,
		setActiveId
	};
};
