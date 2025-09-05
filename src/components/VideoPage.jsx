import React, { useEffect, useState } from "react";
import Loader from "./Loader"
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { useParams, Link } from "react-router";
import { fetchFromAPI } from "../fetchFromAPI";
import { FaCheckCircle } from "react-icons/fa";
const VideoPage = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
const [isloading,setIsloading]=usestate(true)
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
      setIsloading(false);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  // console.log(videoDetail);

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail;
  
 if (isloading)return <Loader/>

  return (
    <div className="flex flex-col mt-24 md:flex-row">
      <div className="m-4 sticky  h-fit md:w-2/3 md:top-24">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />
        <div className="flex justify-between">
          <div>
            <h4>{videoDetail?.snippet?.title}</h4>
            <Link to={`/channel/${videos?.snippet?.channelId}`}>
              <p className="flex items-center mt-2 text-gray-500 text-sm">
                {videoDetail?.snippet?.channelTitle}
                <FaCheckCircle className="ml-1 text-sm text-gray-400" />
              </p>
            </Link>
          </div>
          <div>
            <p className="opacity-70 text-sm">{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views</p>
            <p className="opacity-70 text-sm">{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes</p>
          </div>
        </div>
      </div>
      <Videos flex_col={"flex-col"} videos={videos} />
    </div>
  );
};

export default VideoPage;
