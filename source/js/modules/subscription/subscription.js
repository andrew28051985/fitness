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
      onClickButtonCard();
      break;
    case '6':
      isActiveCard.classList.remove('card--active');
      cards[1].classList.add('card--active');
      onClickButtonCard();
      break;
    case '12':
      isActiveCard.classList.remove('card--active');
      cards[2].classList.add('card--active');
      onClickButtonCard();
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
let oldButton;
let oldPrice;
const countButtonClick = (evt) => {
  const isButton = evt.target.classList.contains('btn');
  if (isButton && count === 0) {
    oldButton = evt.target.parentNode.childNodes[1].textContent;
    oldPrice = evt.target.parentNode.childNodes[5].textContent.replace(/[^0-9]/g, '');
    evt.preventDefault();
    count++;
  } else if (!isButton && count === 0) {
    count = 1;
  } else if (isButton && count === 1) {
    const newButton = evt.target.parentNode.childNodes[1].textContent;
    const newPrice = evt.target.parentNode.childNodes[5].textContent.replace(/[^0-9]/g, '');
    if ((oldButton === newButton) && (oldPrice === newPrice)) {
      count = 0;
    } else {
      oldButton = evt.target.parentNode.childNodes[1].textContent;
      oldPrice = evt.target.parentNode.childNodes[5].textContent.replace(/[^0-9]/g, '');
      evt.preventDefault();
    }
  }
};

const onClickButtonCard = () => {
  if (isMobile) {
    cards.forEach((card) => {
      if (card.classList.contains('card--active')) {
        const items = card.querySelectorAll('.card__item');
        items.forEach((item) => {
          const button = item.querySelector('.btn');
          item.addEventListener('click', countButtonClick);
        });
      }
    });
  } else {
    cards.forEach((card) => {
      if (card.classList.contains('card--active')) {
        const items = card.querySelectorAll('.card__item');
        items.forEach((item) => {
          const button = item.querySelector('.btn');
          item.removeEventListener('click', countButtonClick);
        });
      }
    });
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
};

export {subscriptionCard, breakpointChecker};
