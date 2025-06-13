import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const Videos = ({ videos ,flex_col}) => {
  // console.log(videos);
  return (
    <div className={`flex ${flex_col} flex-wrap gap-3 mx-4 md `}>
      {videos.map((video, index) => {
        return (
          <div key={index} className=" w-80 h-72  bg-zinc-800">
            <Link to={`/video/${video?.id?.videoId}`}>
              <img
                className="w-full h-40 cursor-pointer object-cover"
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.description}
              />
              <div className="p-2 z-10">
                <h4>{video.snippet.title}</h4>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                  <p className="flex items-center mt-2 text-gray-500 text-sm">
                    {video.snippet.channelTitle}
                    <FaCheckCircle className="ml-1 text-sm text-gray-400" />
                  </p>
                </Link>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
