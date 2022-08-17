import React from "react";
import MediaCard from "./mediaCard";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/reducers/getPostList";

function CardList() {
  const dispatch = useDispatch();
  return (
    <div className="mt-10 mb-5 grid grid-cols-3 gap-4">
      "No data avaible"
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="bg-red-500"
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="bg-blue-500"
      >
        +1
      </button>
    </div>
  );
}

export default CardList;
