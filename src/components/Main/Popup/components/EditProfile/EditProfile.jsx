export default function EditProfile() {
  return (
    <form className="modal__form" name="edit-profile" noValidate>
      {/* CONTAINER DO PRIMEIRO INPUT */}
      <label className="modal__field">
        <input
          className="modal__input modal__input_type_name"
          id="profile-name"
          type="text"
          name="name"
          placeholder="Nome"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          required
        />
        <span className="modal__error profile-name-error"></span>
      </label>

      {/* CONTAINER DO SEGUNDO INPUT */}
      <label className="modal__field">
        <input
          className="modal__input modal__input_type_about" //
          id="profile-about"
          type="text"
          name="about"
          placeholder="Sobre mim"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          required
        />
        <span className="modal__error profile-about-error"></span>
      </label>

      <button className="modal__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
