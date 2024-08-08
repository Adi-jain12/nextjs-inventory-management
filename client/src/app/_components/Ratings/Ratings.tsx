import { Star } from 'lucide-react';
import React from 'react';

type Props = {
	rating: number;
};

const Ratings = ({ rating }: Props) => {
	return [1, 2, 3, 4, 5].map((index) => (
		<Star
			key={index}
			color={index <= rating ? '#FFC107' : '#E4E5E9'}
			className="w-4 h-4"
		/>
	));
};

export default Ratings;
