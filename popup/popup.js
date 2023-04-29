import initPopupFAQ from '/popup/popup-faq.js';

let active = false;

window.onload = function() {
  initPopup();
  initPopupFAQ();
};

const initPopup = () => {
  const switchDiv = document.querySelector('.switch');
  switchDiv.addEventListener('click', handleSwitchClick);
  initialize();
};

const handleSwitchClick = () => {
  active = !active;
  updatebuttonStyle(active);
  handleStatusChanged(active);
};

const updatebuttonStyle = (active) => {
  const switchDiv = document.querySelector('.switch');
  const switchButton = switchDiv.querySelector('.switch-button');
  switchButton.style.transform = `translate3d(${active ? 16 : 0}px, 0, 0)`;
  switchDiv.style.backgroundColor = active ? '#65CD9B' : '#BDBDBD';
};

const initialize = async () => {
  const obj = await chrome.storage.local.get('ig_story_incognito_viewer_active');
  if (obj['ig_story_incognito_viewer_active']) {
    active = true;
    updatebuttonStyle(active);
  }
};

const handleStatusChanged = () => {
  sendMessage({ active });
};

const sendMessage = (params = {}) => {
  chrome.runtime.sendMessage(params);
};