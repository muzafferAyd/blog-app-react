import React from 'react';
import MediaCard from "./mediaCard";

const CardList = () => {
    return (
        <div className="mt-10 mb-5 grid grid-cols-3 gap-4">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </div>
    );
};

export default CardList;
