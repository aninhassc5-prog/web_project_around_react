import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]); //  Estado dos cards movido para aqui

  // Busca inicial do utilizador e dos cards em simultâneo
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error(`Erro ao carregar utilizador: ${err}`));

    api
      .getInitialCards()
      .then((cardsData) => {
        if (Array.isArray(cardsData)) setCards(cardsData);
      })
      .catch((err) => console.error(`Erro ao carregar os cards: ${err}`));
  }, []);

  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateUser = (data) => {
    api
      .updateUserInfo({ name: data.name, about: data.about })
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(`Erro ao atualizar perfil: ${error}`));
  };

  const handleUpdateAvatar = (data) => {
    // Passamos o link do avatar para a API
    api
      .updateAvatar({ avatar: data.avatar })
      .then((newData) => {
        // Se a API retornar um objeto atualizado com sucesso, guardamos no estado
        if (newData && newData.avatar) {
          setCurrentUser(newData);
        } else {
          // Fallback caso a API devolva uma estrutura diferente
          setCurrentUser((prev) => ({ ...prev, avatar: data.avatar }));
        }
        handleClosePopup();
      })
      .catch((error) => console.error(`Erro ao atualizar avatar: ${error}`));
  };

  //  FUNÇÃO Curtir/Descurtir
  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c)),
        );
      })
      .catch((error) => console.error(error));
  }

  //  FUNÇÃO: Excluir cartão
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  //  NOVA FUNÇÃO: Adicionar um novo cartão na API e na tela
  const handleAddPlaceSubmit = (data) => {
    api
      .addCard({ name: data.name, link: data.link })
      .then((newCard) => {
        // Abordagem declarativa: adiciona o novo card no início da lista usando o spread operator (...)
        setCards([newCard, ...cards]);
        handleClosePopup(); // Fecha o popup após o sucesso
      })
      .catch((error) => console.error(`Erro ao adicionar cartão: ${error}`));
  };

  return (
    // Passa  o handleAddPlaceSubmit para dentro do valor do contexto
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          popup={popup}
          setPopup={setPopup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          cards={cards} //  Passando os cards como prop
          onCardLike={handleCardLike} //  Passando a função de Like como prop
          onCardDelete={handleCardDelete} //  Passando a função de Delete como prop
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
