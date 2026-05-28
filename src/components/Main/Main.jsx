import avatarImg from "../../images/Ana avatar.png";
import editIcon from "../../images/profile-edit-button.svg";
import addIcon from "../../images/profile-add-button.svg";
import trashCapIcon from "../../images/trashcap.svg";
import trashCanIcon from "../../images/trashcan.svg";
import likeIcon from "../../images/like.svg";
import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./Popup/components/NewCard/NewCard";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);
export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <img
            className="profile__avatar"
            src={avatarImg}
            alt="Imagem da autora"
          />
          <div className="profile__info">
            <h2 className="profile__name">Ana Sofia Sanches</h2>
            <p className="profile__description">Exploradora</p>
          </div>
          <button
            aria-label="Add card"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
