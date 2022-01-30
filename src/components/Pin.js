import React from 'react';
import { urlFor } from '../client';

const Pin = ({ pin: { image, postedBy, _id, destination } }) => {
	return (
		<div>
			<img
				src={urlFor(image).width(250).url()}
				className="rounden-lg w-full"
				alt="user-post"
			/>
		</div>
	);
};

export default Pin;
