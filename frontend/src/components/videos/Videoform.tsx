import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { VideoType } from "./VideoType";
import * as VideoService from "./VideoService";
import { toast } from "react-toastify";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface paramsType {
  id: string;
}

export default function Videoform(): JSX.Element | null {
  const inithialState = {
    title: "",
    url: "",
    description: "",
  };
  const [formData, setFormData] = useState<VideoType>(inithialState);
  const history = useHistory();
  const params = useParams<paramsType>();

  const handleInputChange = (e: inputChange) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.title && formData.description && formData.url) {
      if (!params.id) {
        const res = await VideoService.createVideo(formData);
        toast.success("New video added");
      } else {
        const res = await VideoService.updateVideo(params.id, formData);
        toast.success("The Video was edited");
      }
      setFormData(inithialState);
      history.push("/");
    } else {
      toast.error("Fill all the inputs");
    }
  };

  const getVid = async (id: string) => {
    const res = await VideoService.getVideo(id);
    const { title, description, url } = res.data;
    setFormData({ title, description, url });
  };

  useEffect(() => {
    if (params.id) {
      getVid(params.id);
    }
  }, []);

  useEffect(() => {
    setFormData(inithialState)
  }, [params]);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body text-center text-secondary">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  placeholder="Insert a Title"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.title}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="url"
                  type="text"
                  placeholder="write the url"
                  onChange={handleInputChange}
                  value={formData.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Type a description"
                  rows={3}
                  onChange={handleInputChange}
                  value={formData.description}
                ></textarea>
              </div>
              <div className="form-group">
                {params.id ? (
                  <button className="btn btn-info form-control" type="submit">
                    Edit Video
                  </button>
                ) : (
                  <button
                    className="btn btn-primary form-control"
                    type="submit"
                  >
                    Create Video
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
