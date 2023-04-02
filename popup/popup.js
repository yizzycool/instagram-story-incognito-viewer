let active = false;

window.onload = function() {
  const switchDiv = document.querySelector('.switch');
  switchDiv.addEventListener('click', handleSwitchClick);
  initialize();
}

const handleSwitchClick = () => {
  active = !active;
  updatebuttonStyle(active);
  handleStatusChanged(active);
};

const updatebuttonStyle = (active) => {
  const switchDiv = document.querySelector('.switch');
  const switchButton = switchDiv.querySelector('.switch-button');
  switchButton.style.transform = `translate3d(${active ? 15 : -3}px, 0, 0)`;
  switchButton.style.backgroundColor = active ? 'rgb(138, 180, 248)' : 'rgb(218, 220, 224)';
  switchDiv.style.backgroundColor = active ? 'rgba(138, 180, 248, 0.5)' : 'rgb(154, 160, 166)';
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