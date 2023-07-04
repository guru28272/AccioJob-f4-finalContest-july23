import { useState } from "react";
import DetailPage from "./components/DetailPage";
import Display from "./components/Display";
import { useCustomReducer } from "./components/useCustomReducer";

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

function App() {
  const [detail, setDetail] = useState("");
  const [isLoading, isErr, data] = useCustomReducer(apiUrl);

  // console.log(state.isLoading);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isErr) {
    return <h1>error occurs</h1>;
  }

  // console.log(data);
  return (
    <div className="showDetail">
      {data && <Display data={data} setDetail={setDetail} />}

      {detail && <DetailPage item={detail} />}
    </div>
  );
}

export default App;
