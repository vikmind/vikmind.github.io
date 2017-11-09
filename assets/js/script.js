(function(){

const docOn = document.addEventListener.bind(document);
const getEl = document.querySelector.bind(document);
const contentSelector = '#main_content';
docOn('turbolinks:before-visit', e => {
  const $c = getEl(contentSelector);
  $c.classList.add('hidden');
});
docOn('turbolinks:before-render', e => {
  const $c = e.data.newBody.querySelector(contentSelector);
  $c.classList.add('immediately-hidden');
});
docOn('turbolinks:before-cache', e => {
  const $c = getEl(contentSelector);
  $c.classList.add('immediately-hidden');
});
docOn('turbolinks:load', e => {
  const $c = getEl(contentSelector);
  setTimeout(() => {
    $c.classList.remove('immediately-hidden');
    $c.classList.add('showing')
  }, 200);
})

})();
