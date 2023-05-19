const selectSingle = document.querySelector('.order__select');
const selectSingle_title = selectSingle.querySelector('.order__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.order__select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});
