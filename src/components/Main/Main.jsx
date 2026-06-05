import { useState, useEffect, useContext } from "react";
import avatarImg from "../../images/Ana avatar.png";
import editIcon from "../../images/profile-edit-button.svg";
import addIcon from "../../images/profile-add-button.svg";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./Popup/components/NewCard/NewCard";
import Card from "./Card/Card";
import EditAvatar from "./Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./Popup/components/EditProfile/EditProfile";
import ImagePopup from "./Popup/components/ImagePopup/ImagePopup";
import api from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main({
  popup,
  setPopup,
  onOpenPopup,
  onClosePopup,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const contextValue = useContext(CurrentUserContext);
  const currentUser = contextValue?.currentUser;

  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  const editProfilePopup = {
    title: "Alterar o nome do perfil",
    children: <EditProfile />,
  };
  const newCardPopup = { title: "Novo Local", children: <NewCard /> };

  function handleOpenPopupWrapper(popupConfig) {
    if (popupConfig && popupConfig.link) {
      setPopup({
        title: popupConfig.name,
        isImage: true,
        children: (
          <ImagePopup
            card={{ name: popupConfig.name, link: popupConfig.link }}
          />
        ),
      });
    } else {
      onOpenPopup(popupConfig);
    }
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div
            className="profile__avatar-container"
            onClick={() => handleOpenPopupWrapper(editAvatarPopup)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              className="profile__avatar"
              src={currentUser?.avatar || avatarImg}
              alt="Imagem do autor"
              onError={(e) => {
                e.target.src = avatarImg;
              }}
            />
            <button
              type="button"
              className="profile__avatar-edit-button"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenPopupWrapper(editAvatarPopup);
              }}
            >
              <img src={editIcon} alt="Ícone de editar avatar" />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h2 className="profile__name">
                {currentUser?.name || "Carregando..."}
              </h2>
              <button
                aria-label="Edit profile"
                className="profile__button_type_edit"
                type="button"
                onClick={() => handleOpenPopupWrapper(editProfilePopup)}
              >
                <img src={editIcon} alt="Ícone de editar perfil" />
              </button>
            </div>
            <p className="profile__description">{currentUser?.about || ""}</p>
          </div>
          <button
            aria-label="Add card"
            className="profile__button_type_add"
            type="button"
            onClick={() => handleOpenPopupWrapper(newCardPopup)}
          >
            <img src={addIcon} alt="Ícone de adicionar" />
          </button>
        </div>
      </section>

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopupWrapper}
            onCardLike={onCardLike} //  Encaminhando as props vindas do App
            onCardDelete={onCardDelete} //  Encaminhando as props vindas do App
          />
        ))}
      </ul>

      {popup && (
        <Popup
          onClose={onClosePopup}
          title={popup.title}
          isImage={popup.isImage}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
