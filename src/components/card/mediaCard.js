import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MediaCard({ post }) {
  const navigate = useNavigate();
  const openDetails = () => {
    navigate(`/detail/${post.id}`, { state: { post } });
  };
  return (
    <div>
      <div
        onClick={openDetails}
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
        style={{ height: "250px" }}
      >
        <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.body}
        </p>
      </div>
    </div>
  );
}
