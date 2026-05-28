export default function Card(props) {
  const { name, link } = props.card;
  return (
    <div className="elements__card">
      <button className="elements__image-button">
        <img className="elements__image" src="" alt="" />
      </button>
      <div className="elements__title">
        <h3>{name}</h3>
        <button
          className="elements__button elements__button_type_like"
          type="button"
        >
          <img src="./images/like.svg" alt="Curtir" />
        </button>
      </div>
    </div>
  );
}
