import React, { ReactElement } from "react";
import { VideoType } from "./VideoType";
import ReactPlayer from 'react-player'
import {useHistory} from "react-router-dom"
import * as VideoService from './VideoService'
import './VideoItem.scss'

interface propsType {
  video: VideoType;
  loadVideos: () => void;
}

export default function VideoItem({ video, loadVideos }: propsType): ReactElement | null {
  const history = useHistory();

  const handleDelete = async (id:string)=>{
    await VideoService.deleteVideo(id) 
    loadVideos()
  }

  return (
    <div className="col-md-4">
      <div className="card m-2 video-card" >
        <div className="card-body">
          <div className="d-flex justify-content-between" style={{gap: "10px"}}>
            <h2 onClick={() => history.push(`/update/${video._id}`)}>{video.title}</h2>
              <span className="text-danger font-weight-bold" onClick={()=> video._id && handleDelete(video._id)}>x</span>
          </div>
          <p>{video.description}</p>
            <div className="embed-responsive embed-responsive-16by9">
            <ReactPlayer url={video.url} />
          </div>
        </div>
      </div>
    </div>
  );
}
