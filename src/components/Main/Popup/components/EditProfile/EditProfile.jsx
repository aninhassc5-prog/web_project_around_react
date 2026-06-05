import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext || {};

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setDescription(currentUser.about || "");
    }
  }, [currentUser]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleUpdateUser) {
      handleUpdateUser({ name, about: description });
    }
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* A classe popup__name deve envolver APENAS os inputs, exatamente como no CSS original */}
      <div className="popup__name">
        <input
          className="popup__item"
          id="owner-name"
          maxLength="40"
          minLength="2"
          name="userName"
          placeholder="Nome"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="owner-name-error"></span>

        <input
          className="popup__item"
          id="owner-description"
          maxLength="200"
          minLength="2"
          name="userDescription"
          placeholder="Sobre mim"
          required
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="owner-description-error"></span>
      </div>

      {/* O botão fica FORA da div popup__name para não sofrer o empurrão do padding */}
      <button className="popup__button popup__button_type_send" type="submit">
        Salvar
      </button>
    </form>
  );
}
