import trashCapIcon from "../../../../../images/trashcap.svg";
import trashCanIcon from "../../../../../images/trashcan.svg";
import likeIcon from "../../../../../images/like.svg";

export default function NewCard() {
  return (
    <div className="elements__card">
      <button className="elements__image-button">
        <img className="elements__image" src="" alt="" />
      </button>
      <button
        className="elements__button elements__button_type_trash"
        type="button"
      >
        <img
          className="elements__icon elements__icon_type_trash-cap"
          src={trashCapIcon}
          alt="Excluir"
        />
        <img
          className="elements__icon elements__icon_type_trash-can"
          src={trashCanIcon}
          alt="Excluir"
        />
      </button>

      <div className="elements__title">
        <h3 className="elements__text"></h3>
        <button
          className="elements__button elements__button_type_like"
          type="button"
        >
          <img src={likeIcon} alt="Curtir" />
        </button>
      </div>
    </div>
  );
}
