import React, { useEffect, useState } from "react";
import CardList from "../../components/card/cardList";
import axios from "axios";

export const HomePage = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async (
    url = "https://jsonplaceholder.typicode.com/posts"
  ) => {
    try {
      const result = await axios.get(url);
        console.log(  "result",  result.data);
      const filteredData = result.data.filter(user => user?.userId === 1)
      setPostList([...postList, ...filteredData]);
    } catch ({ response }) {
      if (response) {
        console.log(response);
      } else {
        console.log("Something wrong");
      }
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  if (!postList?.length) return "Loading...";

  return (
    <div className="bg-white my-5 flex justify-evenly">
      <CardList postList={postList} />
    </div>
  );
};
