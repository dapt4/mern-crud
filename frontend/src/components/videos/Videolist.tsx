import React, { useEffect, useState } from "react";
import { VideoType } from "./VideoType";
import * as VideoService from "./VideoService";
import VideoItem from "./VideoItem";

export default function Videolist(): JSX.Element {
  const [videoData, setVideoData] = useState<VideoType[]>([]);

  const load = async () => {
    const res = await VideoService.getVideos();
    const formatedVideos = res.data.map(video => {
      return{
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt): new Date()
      }
    })
      .sort((a,b)=> b.createdAt.getTime() - a.createdAt.getTime())
    setVideoData(formatedVideos);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="row">
      {videoData.map(video => (
        <VideoItem key={video._id} video={video} loadVideos={load} />
      ))}
    </div>
  );
}
