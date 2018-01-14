const find = selector => document.querySelector(selector);
const findAll = selector => document.querySelectorAll(selector);

const Modal = (root) => {
  const show = () => {
    root.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  const hide = () => {
    root.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  const init = () => {
    show(root);

    root.querySelector('.bottom-close')
      .onclick = () => hide(root);

    window.onclick = ({ target }) => {
      if (target === root) {
        hide(root);
      }
    };
  };

  return { show, hide, init };
};

const modalTriggers = findAll('.modal-trigger');
Array.from(modalTriggers).forEach((trigger) => {
  trigger.addEventListener('click', ({ target }) => {
    const element = find(target.dataset.modal);

    Modal(element).init();
  });
});
