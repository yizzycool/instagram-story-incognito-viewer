const i18nKeys = [
  'appName',
  'functionTitle_1',
  'faqTitle',
  'question_1',
  'answer_1',
];

const initI18n = () => {
  i18nKeys.forEach(key => {
    const element = document.getElementById(key);
    const content = chrome.i18n.getMessage(key);
    element.innerText = content;
  })
};

export default initI18n;