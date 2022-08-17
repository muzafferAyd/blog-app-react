import CardList from "../../components/card/cardList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPostList } from "../../redux/reducers/getPostList";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);



  return (
    <div className="bg-white my-5 flex justify-evenly">
      <CardList />
    </div>
  );
};
