import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import avatar from "../../assets/imgs/profile.png";
import videoData from "../../videoData";

const SpaceBody = () => {
  return (
    <div className="space__news-body">
      <nav>
        <p className="page-title">Staller</p>
        <p className="share">
          <span>124</span> Share
        </p>
        <p className="comments">
          <span>36</span> Comments
        </p>
      </nav>

      <div className="news-body-hero">
        <div className="hero-title">
          <h1>SPACE LUNACY</h1>
        </div>
        <div className="hero-content">
          <div className="hero__content-wrapper">
            <div className="hero">
              <img src={avatar} alt="avatar" />
              <div className="check">
                <img
                  src="https://daks2k3a4ib2z.cloudfront.net/5437f25bb554f2e70fc83848/54dfb9105644776733ef23f0_check.svg"
                  alt="check"
                />
              </div>
            </div>
            <div className="date">
              <p>Jun</p>
              <h1>23</h1>
            </div>
            <div className="react"></div>
          </div>
        </div>
      </div>
      <div className="news-news">
        <p className="news1">
          The course of the film, my man who would pull the deck, sometimes
          there was no pain in the eros, so that the advantage of the free life
          was
        </p>

        <div className="news2">
          <div className="cap">L</div>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dignissim feugiat est a pulvinar. Etiam eu dolor sed felis accumsan
            maximus sit amet et mauris. Phasellus mi est, fringilla eget ligula
            imperdiet, vestibulum sollicitudin nunc. Sed ultricies tincidunt
            feugiat. Donec suscipit diam et arcu porttitor maximus. Cras vel
            diam sit amet lacus iaculis scelerisque. Vivamus vulputate interdum
            leo et maximus. Vivamus feugiat est ut fringilla sollicitudin.
            Mauris vestibulum at erat non dictum. Nulla viverra luctus urna, et
            fermentum dolor feugiat sed.
          </p>
        </div>
        <div className="ques">
          <div className="line"></div>
          <p>
            Why you <br /> fluctuates <br /> on the moon?
          </p>
        </div>
      </div>
      <div className="news-videos">
        {videoData.map((video, index) => (
          <div className="news-video" key={index}>
            <div
              className="video-thumb"
              style={{
                background: `url(${video.backgroundUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="video-play-btn">
                <BsFillPlayFill />
              </div>
            </div>
            <div className="video-content">
              <h3>{video.title}</h3>
              <p>
                {video.time} -{video.info} <span>{video.space}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceBody;
