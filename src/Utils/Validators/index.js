export const requiredField = (value) => {
  if (!value || value?.trim() === "") return "Required field";
  return undefined;
}

export const maxLenght = (max) => (value) => {
  if (value?.length > max) return `Max lenght is ${max}`;
  return undefined;
}

export const minLenght = (min) => (value) => {
  if (value?.length < min) return `Min lenght is ${min}`;
  return undefined;
}

export const invalidEmail = (value) => {
  if (value?.indexOf("@gmail.com") === -1 && value?.indexOf("@mail.ru") === -1 && value?.indexOf("@yandex.by") === -1) { 
    return "Invalid email"
  };
  return undefined;
}