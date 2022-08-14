import React from 'react';

const MediaCard = () => {
    return (
        <div>
            <a href="/detail"
               className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy
                    technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                    acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>
        </div>
    );
};

export default MediaCard;
