module.exports = (Franz, settings) => {
  function getMessages() {
    const messages = document.querySelectorAll('.text-content.unread').length;

    // set Franz badge
    Franz.setBadge(messages);
  }

  if (settings.isDarkModeEnabled) {
    localStorage.setItem('dark_mode_enabled', 'true');
  } else {
    localStorage.setItem('dark_mode_enabled', 'false');
  }

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
