/* eslint-disable react/prop-types */
import { Modal } from "semantic-ui-react";
import { useState } from "react";

const Field = ({ label, placeholder, name, value, handleInput }) => {
  // const [value, setValue] = useState("alma");

  // const handleInput = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <div className="field">
      <label>{label}</label>
      <input onInput={handleInput} name={name} type="text" placeholder={placeholder} value={value} />
    </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ open, handleModalOpen, handleModalClose }) {
  const [formState, setFormState] = useState(defaultState);

  const handleInput = (e) => {
    setFormState({ ...formState, [e.taget.name]: e.target.value });
  };

  return (
    <Modal as="form" className="ui modal" open={true} onOpen={handleModalOpen} onClose={handleModalClose}>
      <i onClick={handleModalClose} className="close icon"></i>
      <div onClick={handleModalOpen} className="header">
        Add new Track
      </div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field
                handleInput={handleInput}
                value={formState.artist}
                label="Author"
                placeholder="John Williams"
                name="artist"
              />
              <Field
                handleInput={handleInput}
                value={formState.title}
                label="Track name"
                placeholder="Imperial March"
                name="title"
              />
              <Field
                handleInput={handleInput}
                value={formState.length}
                label="Length"
                placeholder="3:44"
                name="length"
              />
            </div>
            <div className="three fields">
              <Field
                handleInput={handleInput}
                value={formState.spotifyURL}
                label="Spotify URL"
                placeholder="https://"
                name="spotifyURL"
              />
              <Field
                handleInput={handleInput}
                value={formState.lyricsURL}
                label="Lyrics URL"
                placeholder="https://"
                name="lyricsURL"
              />
              <Field
                handleInput={handleInput}
                value={formState.chordsURL}
                label="Guitar tab URL"
                placeholder="https://"
                name="chordsURL"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div onClick={handleModalClose} className="ui black deny button">
          Cancel
        </div>
        <button className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
}
