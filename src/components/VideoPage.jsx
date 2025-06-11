import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { useParams } from "react-router";
import { fetchFromAPI } from "../fetchFromAPI";
const VideoPage = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}}`).then((data) => {
      setVideoDetail(data?.items[0]);
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

  return (
    <div className="flex">
      <div className="w-3/4">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
        <div className="flex">
          <p>{videoDetail?.snippet?.title}</p>
          <div>
            <p>{videoDetail?.statistics?.viewCount}</p>
            <p>{videoDetail?.statistics?.likeCount}</p>
          </div>
        </div>
      </div>
      <Videos flex_col={'flex-col'} videos={videos} />
    </div>
  );
};

export default VideoPage;
