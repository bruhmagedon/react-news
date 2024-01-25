// скрипт для форматирования даты
export const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // форматирование даты в текстовую
  return date.toLocaleDateString("en-US", options);
};
