import React from "react";
import MediaCard from "./mediaCard";
import {useDispatch, useSelector} from "react-redux";

function CardList() {
    const { posts, loading } = useSelector((state) => state.postList);
  return (

      <div className="mt-10 mb-5 grid grid-cols-3 gap-4">
          {posts
              ? posts.map((item, id) => <MediaCard key={id} post={item} />)
              : "No data avaible"}
      </div>
  );
}

export default CardList;
