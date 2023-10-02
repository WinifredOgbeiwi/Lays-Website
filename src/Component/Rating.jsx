import React from 'react';

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        // const starClass = i <= rating ? 'text-[#f0c000]' : '#ccc';
        stars.push(<span key={i} className='text-[#FBB616]'>&#9733;</span>);
    }

    return (
        <div className="star-rating">
            {stars.slice(0, rating)}
        </div>
    );
};

export default StarRating;
