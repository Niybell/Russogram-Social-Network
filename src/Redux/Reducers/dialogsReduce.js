const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  contacts: [
    { username: "Andrey", lastMessage: "Привет!", url: "id1", status: "online" },
    { username: "Olga", lastMessage: "Садись за математику!", url: "id2", status: "offline" },
    { username: "Vika", lastMessage: "Окей", url: "id3", status: "online" },
    { username: "Arteom", lastMessage: "Это моя соц сеть!", url: "id4", status: "sleep" },
    { username: "Заметки", lastMessage: 'Сделать страницу "В тренде"', url: "notes", status: "" }
  ],
  messages: {
    id1: [
      { author: "me", message: "Привет, это моя соц. сеть!", date: "11.12.2022", time: "15:20", id: 1 },
      { author: "Andrey", message: "Привет, очень крутая!", date: "11.12.2022", time: "15:22", id: 2 },
      { author: "Andrey", message: "Зарегестрировался за 5 мин. Кстати ты её на React пишешь?", date: "11.12.2022", time: "15:25", id: 3 },
      { author: "me", message: "На React и Redux", date: "11.12.2022", time: "15:30", id: 4 },
      { author: "Andrey", message: "Крутая!", date: "11.12.2022", time: "15:32", id: 5 },
      { author: "me", message: "Спасибо!", date: "11.12.2022", time: "15:35", id: 6 },
      { author: "Andrey", message: "Не за что!", date: "11.12.2022", time: "15:40", id: 7 },
    ],
  }
}
const dialogsReduce = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    if (action.content.trim() === '') return;
    const id = state.messages.id1[state.messages.id1.length - 1].id + 1;
    const newMessage = {
      author: "me",
      message: action.content,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString().slice(0, -3),
      id: id
    };
    const stateCopy = { ...state };
    stateCopy.messages.id1 = [...state.messages.id1, newMessage];
    return stateCopy;
  }

  return state;
}

export const sendMessageActionCreator = (content) => {
  return {
    type: SEND_MESSAGE,
    content
  };
}


export default dialogsReduce;