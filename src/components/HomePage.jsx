import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import {fetchFromAPI} from "../fetchFromAPI";


const Homepage = () => {
  const [chosenItem, setChosenItem] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${chosenItem}`).then((data) =>{
      setVideos(data.items)
    }
  );
  }, [chosenItem]);
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar chosenItem={chosenItem} setChosenItem={setChosenItem} />
      <div className="overflow-auto mb-4"> 
        <p className="m-4 text-4xl font-bold">
          {chosenItem}
          <span className="text-[#FC1503] ml-1">Videos</span>
        </p>
        <div>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
          <p>vvvvvvvvvvvvvvvvv</p>
        </div>
        {/* <Videos videos={videos}/> */}
      </div>
    </div>
  );
};

export default Homepage;
