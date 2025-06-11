import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import {fetchFromAPI} from "../fetchFromAPI";
import { useParams } from "react-router";


const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>{
      setVideos(data?.items)
    }
  );
  }, [searchTerm]);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="overflow-auto mb-4"> 
        <p className="m-4 text-4xl font-bold">
          {searchTerm}
          <span className="text-[#FC1503] ml-1">Videos</span>
        </p>
        <Videos videos={videos}/>
      </div>
    </div>
  );
};

export default SearchPage;
