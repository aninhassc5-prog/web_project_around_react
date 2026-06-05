export default function ImagePopup(props) {
  const { card } = props;
  if (!card) return null;
  const { name, link } = card;

  return (
    <>
      <img src={link} alt={name} className="popup__image" />
      <p className="popup__caption">{name}</p>
    </>
  );
}
