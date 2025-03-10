import BonJovi from "../assets/bonjovi.jpg";
import TrackDetailsButton from "./TrackDetailsButton";

const TrackDeatils = () => {
  return (
    <>
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img src={BonJovi} />
            </div>
            <div className="content">
              <a className="header">It&apos;s my life</a>
              <div className="meta">
                <span>Bon Jovi</span>
                <span>4:35</span>
              </div>
              <div className="extra">
                <TrackDetailsButton
                  url="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                  bgColor="green"
                  icon="spotify"
                  label="Listen on Spotify"
                />
                <TrackDetailsButton
                  url="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
                  bgColor="teal"
                  icon="microphone"
                  label="Show lyrics"
                />
                <TrackDetailsButton
                  url="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                  bgColor="orange"
                  icon="guitar"
                  label="Show chords"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackDeatils;
