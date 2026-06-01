export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;
  const imageComponent = {
    name: name,
    link: link,
  };

  return (
    <li className="card">
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}
