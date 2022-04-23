const subscription = document.querySelector('.subscription');
const tabs = subscription.querySelectorAll('.tabs__item');
const cards = subscription.querySelectorAll('.card__list');
const breakpoint = window.matchMedia('(max-width:1199px)');
let isDesctop = false;
let isMobile = false;

const isEnterKey = (evt) => evt.key === 'Enter';

const onCardSwitch = () => {
  const isActiveTab = subscription.querySelector('.tabs__item--active');
  const isActiveCard = subscription.querySelector('.card--active');
  switch (isActiveTab.textContent.replace(/[^0-9]/g, '')) {
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
};

const onTabsSwitch = (tab) => {
  const isActiveTab = subscription.querySelector('.tabs__item--active');
  if (!tab.classList.contains('tabs__item--active')) {
    tab.classList.add('tabs__item--active');
    isActiveTab.classList.remove('tabs__item--active');
    onCardSwitch();
  }
};

const switchTabs = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      onTabsSwitch(tab);
    });
    tab.addEventListener('keydown', (evt) =>
      isEnterKey(evt) ? onTabsSwitch(tab) : false
    );
  });
};

let count = 0;
const onClickCard = (card) => {
  console.log(count);
  const button = card.querySelector('.btn');
  if (count === 0) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      count++;
    });
  } else {
    button.addEventListener('click', () => {
      count = 0;
    });
  }
};
const onClickButtonCard = () => {
  console.log(isMobile);
  if (isMobile) {
    cards.forEach((card) => {
      if (card.classList.contains('card--active')) {
        card.addEventListener('click', onClickCard(card));
      }
    });
  } else {

  }
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    isMobile = true;
    isDesctop = false;
  } else {
    isDesctop = true;
    isMobile = false;
  }
  onClickButtonCard();
};

breakpoint.addListener(breakpointChecker);

const subscriptionCard = () => {
  switchTabs();
  onClickButtonCard();
};

export {subscriptionCard, breakpointChecker};
