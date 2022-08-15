import React from "react";
import MediaCard from "./mediaCard";

function CardList({ postList }) {
  return (
    <div className="mt-10 mb-5 grid grid-cols-3 gap-4">
      {postList
        ? postList.map((item, id) => <MediaCard key={id} post={item} />)
        : "No data avaible"}
    </div>
  );
}

export default CardList;
