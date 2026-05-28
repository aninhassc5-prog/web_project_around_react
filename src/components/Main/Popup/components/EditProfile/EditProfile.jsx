export default function EditProfile() {
  return (
    <form className="popup__form" name="edit-profile">
      <input
        className="popup__input popup__input_type_name"
        id="profile-name"
        type="text"
        name="name"
        placeholder="Nome"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error profile-name-error"></span>

      <input
        className="popup__input popup__input_type_about"
        id="profile-about"
        type="text"
        name="about"
        placeholder="Sobre mim"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error profile-about-error"></span>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
