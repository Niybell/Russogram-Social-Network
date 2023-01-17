import dialogsReduce, { sendMessageActionCreator } from "./dialogsReduce"

it('correct send message', () => {
  const initialState = {
    messages: {
      id1: [
        { author: "me", message: "Привет, это моя соц. сеть!", date: "11.12.2022", time: "15:20", id: 1 },
        { author: "Андрей Репин", message: "Привет, очень крутая!", date: "11.12.2022", time: "15:22", id: 2 },
        { author: "Андрей Репин", message: "Зарегестрировался за 5 мин. Кстати ты её на React пишешь?", date: "11.12.2022", time: "15:25", id: 3 },
        { author: "me", message: "На React и Redux", date: "11.12.2022", time: "15:30", id: 4 },
        { author: "Андрей Репин", message: "Крутая!", date: "11.12.2022", time: "15:32", id: 5 },
        { author: "me", message: "Спасибо!", date: "11.12.2022", time: "15:35", id: 6 },
        { author: "Андрей Репин", message: "Не за что!", date: "11.12.2022", time: "15:40", id: 7 },
      ],
    }
  }
  const newState = dialogsReduce(initialState, sendMessageActionCreator("TEST-MESSAGE"));
  expect(newState.messages.id1[newState.messages.id1.length - 1]).toStrictEqual({
    author: "me", message: "TEST-MESSAGE", date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString().slice(0, -3), id: 8,
  })
})