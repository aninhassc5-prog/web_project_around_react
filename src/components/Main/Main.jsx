import { useState } from "react";
import avatarImg from "../../images/Ana avatar.png";
import editIcon from "../../images/profile-edit-button.svg";
import addIcon from "../../images/profile-add-button.svg";
import Popup from "./Popup/Popup.jsx";
import NewCard from "./Popup/components/NewCard/NewCard";
import Card from "./Card/Card";
import EditAvatar from "./Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./Popup/components/EditProfile/EditProfile";

// Listas estáticas e configurações fora do componente para evitar recriação na memória
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

const editAvatarPopup = {
  title: "Editar avatar",
  children: <EditAvatar />,
};
const editProfilePopup = {
  title: "Alterar o nome do perfil",
  children: <EditProfile />,
};

const newCardPopup = {
  title: "Novo Local",
  children: <NewCard />,
};

export default function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popupConfig) {
    if (popupConfig.link) {
      setPopup({
        title: popupConfig.name,
        isImage: true,
        children: (
          <div className="elements__container">
            <img
              className="elements__window-image"
              src={popupConfig.link}
              alt={popupConfig.name}
              style={{ maxWidth: "100%", maxHeight: "75vh", display: "block" }}
            />
            <p
              className="elements__caption"
              style={{ color: "#fff", margin: "10px 0 0", fontSize: "12px" }}
            >
              {popupConfig.name}
            </p>
          </div>
        ),
      });
    } else {
      // Se não for imagem (for os formulários normais), abre a configuração padrão
      setPopup(popupConfig);
    }
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          {/* CONTAINER DO AVATAR */}
          <div
            className="profile__avatar-container"
            onClick={() => handleOpenPopup(editAvatarPopup)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              className="profile__avatar"
              src={avatarImg}
              alt="Imagem da autora"
            />

            {/* GARANTA QUE O BOTÃO DO LÁPIS TEM O ONCLICK E O TYPE="BUTTON" */}
            <button
              type="button"
              className="profile__avatar-edit-button"
              onClick={(e) => {
                e.stopPropagation(); // Evita que o clique interfira com a div pai
                handleOpenPopup(editAvatarPopup);
              }}
            >
              <img src={editIcon} alt="Ícone de editar avatar" />
            </button>
          </div>
          {/* INFORMAÇÕES DO PERFIL */}
          <div className="profile__info">
            <div className="profile__title-container">
              <h2 className="profile__name">Ana Sofia Sanches</h2>
              <button
                aria-label="Edit profile"
                className="profile__button_type_edit"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img src={editIcon} alt="Ícone de editar perfil" />
              </button>
            </div>
            <p className="profile__description">Exploradora</p>
          </div>

          {/* BOTÃO DE ADICIONAR CARD */}
          <button
            aria-label="Add card"
            className="profile__button_type_add"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img src={addIcon} alt="Ícone de adicionar" />
          </button>
        </div>
      </section>

      {/* LISTA DE CARTÕES */}
      <ul className="cards__list">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </ul>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isImage={popup.isImage} // 👈 LINHA OBRIGATÓRIA ADICIONADA AQUI!
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
