const subscription = document.querySelector('.subscription');
const tabs = subscription.querySelectorAll('.tabs__item');
const cards = subscription.querySelectorAll('.card__list');

const subscriptionCard = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      const isActiveTab = subscription.querySelector('.tabs__item--active');
      const isActiveCard = subscription.querySelector('.card--active');
      if (!tab.classList.contains('tabs__item--active')) {
        tab.classList.add('tabs__item--active');
        isActiveTab.classList.remove('tabs__item--active');
      }
      switch (tab.textContent.replace(/[^0-9]/g, '')) {
        case '1':
          isActiveCard.classList.remove('card--active');
          cards[0].classList.add('card--active');
          break;
        case '6':
          isActiveCard.classList.remove('card--active');
          cards[1].classList.add('card--active');
          break;
        case '12':
          isActiveCard.classList.remove('card--active');
          cards[2].classList.add('card--active');
          break;
      }
    });
  });
};

export {subscriptionCard};
