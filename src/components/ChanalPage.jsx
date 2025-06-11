import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../fetchFromAPI";
import { useParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import Videos from "./Videos";

const ChanalPage = () => {
  const [chanalDetail, setChanalDetail] = useState([]);
  const [videos,setVideos]=useState([])
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChanalDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);
  // console.log(videos);

  return (
    <div>
      <div
        className="h-80"
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(102,10,117,1) 35%, rgba(182,47,191,1) 65%, rgba(0,212,255,1) 100%)",
        }}
      />
      <div className="flex flex-col justify-center items-center mb-16 -mt-14">
        <img
          className="w-44 h-44 rounded-[50%] border-[1px] border-white"
          src={chanalDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt={chanalDetail?.brandingSettings?.channel?.title}
        />
        <p className="flex items-center font-bold text-lg mt-3">
          {chanalDetail?.brandingSettings?.channel?.title}
          <FaCheckCircle className="ml-1 text-sm text-gray-400" />
        </p>
        <p className="text-gray-700 font-bold">{parseInt(chanalDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</p>
      </div>
      <Videos videos={videos}/>
      
    </div>
  );
};

export default ChanalPage;
