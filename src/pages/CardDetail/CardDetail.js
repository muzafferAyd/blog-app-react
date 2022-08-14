import React from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

export const CardDetail = () => {
  return (
    <div className="bg-white align-baseline flex mt-5 h-screen">
      <ArrowCircleLeftIcon className="w-10 mt-10 ml-10 h-10"></ArrowCircleLeftIcon>
      <div className="ml-2 w-1/2">
        <div className="flex items-baseline max-w-m pt-10  justify-between">
          <h3 className="text-2xl font-bold">Posts</h3>
          <button className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 rounded">
            + New Post
          </button>
        </div>

        <p className="font-normal my-2  text-gray-700 dark:text-gray-600">Title</p>
        <div className="block p-6 max-w-m bg-gray-100  border border-gray-200 shadow-md">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            Here are the biggest enterprise technology
          </h5>
        </div>
        <p className="font-normal my-2 text-gray-700 dark:text-gray-600">
          Description
        </p>
        <div className="block p-6 max-w-m bg-gray-100 border border-gray-200 shadow-md">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>

          <div className="justify-end flex mt-10 ">

          <button
              className="bg-red-500 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Delete</span>
          </button>
          <button
              className="bg-blue-600 text-gray-100 ml-10 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span>Update</span>
          </button>

          </div>
      </div>
    </div>
  );
};
