let activeFAQ = -1;

const initPopupFAQ = () => {
  document.querySelectorAll('.question-block').forEach((list, idx) => {
    list.addEventListener('click', () => {
      closeAllFAQ(idx);
      openFAQ(idx);
    })
  })
};

const closeAllFAQ = (idx) => {
  document.querySelectorAll('.question-block').forEach((list, i) => {
    if (i === idx) return;
    list.querySelector('.plus-icon').classList.remove('plus-icon-active');
  });
};

const openFAQ = (idx) => {
  const faqList = document.querySelectorAll('.question-block');
  const answer = faqList[idx].querySelector('.answer');
  answer.style.maxHeight = activeFAQ === idx ? 0 : `${answer.scrollHeight}px`;
  faqList[idx].querySelector('.plus-icon').classList.toggle('plus-icon-active');
  activeFAQ = activeFAQ === idx ? -1 : idx;
};

export default initPopupFAQ;