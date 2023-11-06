import { RequestHandler } from "express";
import Video from "./Video";

export const createVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(301).json({ Message: "the url already exists" });
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
  } catch (err) {
    console.log(err);
  }
};
export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (err) {
    console.log(err);
  }
};
export const getVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    return res.json(video);
  } catch (err) {
    return res.status(404).json();
  }
};
export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    return res.json(video);
  } catch (err) {
    return res.status(404).json();
  }
};
export const updateVideo: RequestHandler = async (req, res) => {
  try {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(videoUpdated);
  } catch (err) {
    res.status(400).json();
  }
};
