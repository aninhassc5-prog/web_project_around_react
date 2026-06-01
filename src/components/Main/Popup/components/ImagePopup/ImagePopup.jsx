export default function ImagePopup(props) {
  const { onClose, card } = props;
  if (!card) return null;
  const { name, link } = card;

  return (
    <div className="popup popup_type_image popup_opened" id="image-popup">
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__button popup__button_type_close"
          type="button"
          onClick={onClose}
        ></button>

        <img src={link} alt={name} className="popup__image" />
        <p className="popup__caption">{name}</p>
      </div>
    </div>
  );
}
