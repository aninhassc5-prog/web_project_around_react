import trashCapIcon from "../../../../../images/trashcap.svg";
import trashCanIcon from "../../../../../images/trashcan.svg";
import likeIcon from "../../../../../images/like.svg";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext.js"; // Ajuste o caminho se necessário

export default function NewCard() {
  const userContext = useContext(CurrentUserContext);
  const { handleAddPlaceSubmit } = userContext || {};

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleAddPlaceSubmit) {
      handleAddPlaceSubmit({ name: title, link: link });
      // Limpa os campos após o envio
      setTitle("");
      setLink("");
    }
  };

  return (
    <form
      className="popup__form popup__form_type_card"
      name="place-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className="popup__item"
        id="place-title"
        maxLength="30"
        minLength="2"
        name="placeName"
        placeholder="Título"
        required
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <span className="popup__error" id="place-title-error"></span>

      <input
        className="popup__item"
        id="place-link"
        name="placeLink"
        placeholder="Link da imagem"
        required
        type="url"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="popup__error" id="place-link-error"></span>

      <button className="popup__button popup__button_type_send" type="submit">
        Criar
      </button>
    </form>
  );
}
