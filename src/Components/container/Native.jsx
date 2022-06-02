import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import avatar from "../../assets/imgs/profile.png";
import videoData from "../../videoData";
import poster1 from "../../assets/imgs/native1.jpg";

const Native = () => {
  return (
    <div className="native__news-body">
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
          <h1>AMAZONIA BURNS</h1>
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
              <p>Jan</p>
              <h1>1</h1>
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
          <div className="cap">S</div>
          <p>
            uisque dignissim feugiat est a pulvinar. Etiam eu dolor sed felis
            accumsan maximus sit amet et mauris. Phasellus mi est, fringilla
            eget ligula imperdiet, vestibulum sollicitudin nunc. Sed ultricies
            tincidunt feugiat. Donec suscipit diam et arcu porttitor maximus.
            Cras vel diam sit amet lacus iaculis scelerisque. Vivamus vulputate
            interdum leo et maximus. Vivamus feugiat est ut fringilla
            sollicitudin. Mauris vestibulum at erat non dictum. Nulla viverra
            luctus urna, et fermentum dolor feugiat sed.
          </p>
        </div>
      </div>

      <div className="poster">
        <img src={poster1} alt="" />
      </div>
      <div className="news-news">
        <p>
          The course of the film, my man who would pull the deck, sometimes
          there was no pain in the eros, so that the advantage of the free life
          was Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          dolor sed perspiciatis, asperiores voluptate modi! Quisquam
          exercitationem distinctio maxime sit, odit assumenda accusamus dicta
          illum expedita alias! Odit illo iusto obcaecati eaque aut saepe
          quibusdam aliquam cupiditate modi minus explicabo earum debitis,
          impedit ipsam vel provident! Nostrum iure quia perspiciatis ab
          assumenda excepturi labore rem deserunt expedita nobis numquam quaerat
          modi quisquam dolores voluptatem repudiandae neque, eius voluptatibus
          blanditiis facilis placeat earum cupiditate rerum. Porro adipisci ab
          quos, pariatur dolor repellendus consequatur accusantium tempore
          perspiciatis reprehenderit laboriosam, maiores, facilis assumenda quo
          expedita beatae quaerat nemo ad aperiam iusto corrupti odit.
        </p>

        <div className="news2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            ullam natus perspiciatis ad quibusdam voluptate amet eum minus ipsum
            quo sunt ex recusandae in dolore iusto eaque, nesciunt odit! Magnam
            atque hic laboriosam quo ducimus, delectus molestias, tenetur
            laudantium, earum quia laborum nam iusto culpa! Commodi sit non iste
            veniam.
          </p>
        </div>
        <div className="ques">
          <div className="line"></div>
          <p>
            Indigenous <br /> peoples <br /> in Brazil
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

export default Native;
