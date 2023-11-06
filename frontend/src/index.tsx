import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Videolist from "./components/videos/Videolist";
import Videoform from "./components/videos/Videoform";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-5">
        <Switch>
          <Route exact path="/" component={Videolist} />
          <Route path="/newvideo" component={Videoform} />
            <Route path="/update/:id" component={Videoform} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
