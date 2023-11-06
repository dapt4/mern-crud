import axios from "axios";
import {VideoType} from "./VideoType";

const API = process.env.API 

export const getVideos = async () => {
    return await axios.get<VideoType[]>(`${API}/videos`);
}

export const createVideo = async (video: VideoType) => {
    return await axios.post(`${API}/videos`, video);
}

export const getVideo = async (id:string) => {
    return await axios.get<VideoType>(`${API}/videos/${id}`);
}

export const updateVideo = async (id:string, video: VideoType) => {
    return await axios.put<VideoType>(`${API}/videos/${id}`, video);
}

export const deleteVideo = async (id:string) => {
    return await axios.delete(`${API}/videos/${id}`);
}
