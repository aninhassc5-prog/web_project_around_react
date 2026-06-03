import { useState } from "react";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;

  // 2. Cria um estado local que começa com o valor inicial vindo do objeto card
  const [curtido, setCurtido] = useState(isLiked);

  const imageComponent = {
    name: name,
    link: link,
  };

  // 3. Função que inverte o estado ao clicar no coração
  const alternarLike = () => {
    setCurtido(!curtido);
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
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>

        {/* 4. Adiciona o onClick e muda a classe dinamicamente se estiver curtido */}
        <button
          aria-label="Like card"
          type="button"
          onClick={alternarLike}
          className={`card__like-button ${curtido ? "card__like-button_is-active" : ""}`}
        />
      </div>
    </li>
  );
}
