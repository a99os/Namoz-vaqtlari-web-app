const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.setAttribute("class", className);
  if (content) element.innerHTML = content;
  return element;
};

const month = [
  "0",
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];
