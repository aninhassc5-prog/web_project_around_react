import "../../../blocks/popup.css";

export default function Popup(props) {
  // Certifique-se de que a desestruturação tem o 'isImage' exatamente assim
  const { onClose, title, children, isImage } = props;

  return (
    <div className="modal modal__opened">
      {/* Remove a caixa branca mudando para elements__container */}
      <div className={isImage ? "elements__container" : "modal__container"}>
        <button
          aria-label="Close modal"
          className="modal__close-button"
          type="button"
          onClick={onClose}
        >
          ✕
        </button>
        {!isImage && title && <h3 className="modal__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
