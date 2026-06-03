export default function EditAvatar() {
  return (
    <form className="modal__form" name="edit-avatar" noValidate>
      <input
        className="modal__input"
        type="url"
        placeholder="Image link"
        name="avatar-link"
        id="avatar-link"
        autoComplete="off"
        required
      />
      {/* Espaço reservado para mensagens de erro futuras */}
      <span className="modal__error avatar-link-error"></span>

      <button className="modal__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
