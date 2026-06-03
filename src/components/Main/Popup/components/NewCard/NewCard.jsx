import trashCapIcon from "../../../../../images/trashcap.svg";
import trashCanIcon from "../../../../../images/trashcan.svg";
import likeIcon from "../../../../../images/like.svg";

export default function NewCard() {
  return (
    <form className="modal__form" name="new-card" noValidate>
      {/* CAMPO DO TÍTULO */}
      <label className="modal__field">
        <input
          className="modal__input modal__input_type_title"
          id="card-title"
          type="text"
          name="name"
          placeholder="Title"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required
        />
        <span className="modal__error card-title-error"></span>
      </label>

      {/* CAMPO DO LINK DA IMAGEM */}
      <label className="modal__field">
        <input
          className="modal__input modal__input_type_link"
          id="card-link"
          type="url"
          name="link"
          placeholder="Image link"
          autoComplete="off"
          required
        />
        <span className="modal__error card-link-error"></span>
      </label>

      {/* BOTÃO SAVE */}
      <button className="modal__submit-button" type="submit">
        Save
      </button>
    </form>
  );
}
