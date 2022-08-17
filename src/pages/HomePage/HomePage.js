import CardList from "../../components/card/cardList";
import {useSelector} from "react-redux";

export const HomePage = () => {
  const postList = useSelector(state => state.counter.value)
  console.log("sdvsdvd", postList)
/*  const [postList, setPostList] = useState([]);

  const getPostList = async (
    url = "https://jsonplaceholder.typicode.com/posts"
  ) => {
    try {
      const result = await axios.get(url);
      console.log("result", result.data);
      let AssumedUserId = 1;
      const filteredData = result.data.filter(
        (user) => user?.userId === AssumedUserId
      );
      setPostList([...postList, ...filteredData]);
    } catch ({ response }) {
      if (response) {
        console.log(response);
      } else {
        console.log("Something wrong");
      }
    }
  };*/

/*  useEffect(() => {
    getPostList();
  }, []);*/

/*  if (!postList?.length) return "Loading...";*/

  return (
    <div className="bg-white my-5 flex justify-evenly">
      <CardList  />
      {postList}
    </div>
  );
};

