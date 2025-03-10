import Navbar from "../components/Navbar";
import TrackDetails from "../components/TrackDetails";

const PlayLists = () => {
  return (
    <>
      <body className="ui container">
        <Navbar />
        <div className="ui container">
          <h1>My Playlists</h1>
          <div className="ui stackable two column grid">
            <div className="ui six wide column">
              <h3>Playlists</h3>
              <div className="ui very relaxed selection list">
                <div className="item">
                  <i className="large compact disc middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Heavy Metal</a>
                    <div className="description">5 songs</div>
                  </div>
                </div>
                <div className="active item">
                  <i className="large compact disc middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Classics</a>
                    <div className="description">4 songs</div>
                  </div>
                </div>
                <div className="item">
                  <i className="large compact disc middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Movie Soundtracks</a>
                    <div className="description">9 songs</div>
                  </div>
                </div>
                <div className="item" id="newPlaylist">
                  <i className="large green plus middle aligned icon"></i>
                  <div className="content">
                    <a className="header">New</a>
                    <div className="description">Create a new playlist</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui ten wide column">
              <h3>Classics</h3>
              <div className="ui very relaxed selection list">
                <div className="item">
                  <i className="large music middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Highway to hell</a>
                    <div className="description">AC/DC</div>
                  </div>
                </div>
                <div className="item">
                  <i className="large music middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Thunderstruck</a>
                    <div className="description">AC/DC</div>
                  </div>
                </div>
                <div className="item">
                  <i className="large music middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Take me home country roads</a>
                    <div className="description">John Denver</div>
                  </div>
                </div>
                <div className="active item">
                  <i className="large music middle aligned icon"></i>
                  <div className="content">
                    <a className="header">It&apos;s my life</a>
                    <div className="description">Bon Jovi</div>
                  </div>
                </div>
                <div className="item">
                  <i className="large music middle aligned icon"></i>
                  <div className="content">
                    <a className="header">Livin&apos; on a prayer</a>
                    <div className="description">Bon Jovi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui divider"></div>
          <TrackDetails />
        </div>

        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">Add new Playlist</div>
          <div className="image content">
            <div className="description">
              <div className="ui form">
                <div className="field">
                  <label>Name</label>
                  <input required type="text" placeholder="My Playlist" />
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="ui black deny button">Cancel</div>
            <div className="ui positive right labeled icon button">
              Add
              <i className="plus icon"></i>
            </div>
          </div>
        </div>

        {/* <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.4/dist/semantic.min.js"></script> */}

        {/* <script>
    $(".ui.dropdown").dropdown();
    $("#newPlaylist").click(function () {
      $(".ui.modal").modal("show");
    });
  </script> */}
      </body>
    </>
  );
};

export default PlayLists;
