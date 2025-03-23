import classNames from "classnames";

/* eslint-disable react/prop-types */
const PlaylistItem = ({ playlist, activeIndex, setActiveIndex }) => {
  const handlerItemClick = () => {
    setActiveIndex(playlist.id);
  };
  return (
    <div onClick={handlerItemClick} className={classNames("item", { active: activeIndex === playlist.id })}>
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <a className="header">{playlist.title}</a>
        <div className="description">{playlist.tracks.length} songs</div>
      </div>
    </div>
  );
};

export default PlaylistItem;
