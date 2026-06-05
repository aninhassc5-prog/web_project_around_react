import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext.js"; // 👈 Ajuste a quantidade de "../" se o Vite der erro de importação

export default function EditAvatar() {
  const userContext = useContext(CurrentUserContext);
  const { handleUpdateAvatar } = userContext || {};

  const avatarInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleUpdateAvatar && avatarInputRef.current) {
      const inputUrl = avatarInputRef.current.value.trim();

      if (!inputUrl) {
        console.error("O campo de URL está vazio.");
        return;
      }

      // Envia o link para a função que está no App.jsx
      handleUpdateAvatar({
        avatar: inputUrl,
      });
    }
  };

  return (
    <form
      className="modal__form"
      name="edit-avatar"
      noValidate
      onSubmit={handleSubmit} //  Dispara a função ao clicar em Salvar
    >
      <input
        className="modal__input"
        type="url"
        placeholder="Image link"
        name="avatar-link"
        id="avatar-link"
        autoComplete="off"
        required
        ref={avatarInputRef} //   Diz ao React qual input deve ler
      />
      {/* Espaço reservado para mensagens de erro futuras */}
      <span className="modal__error avatar-link-error"></span>

      <button className="modal__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
