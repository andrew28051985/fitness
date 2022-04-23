const subscription = document.querySelector('#subscription');
const mainScreen = document.querySelector('.main-screen');
const link = mainScreen.querySelector('.btn--main');

const scrollToLink = () => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    subscription.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'center',
    });
  });

};

export {scrollToLink};
