const setRating = (num) => {
  if (num > 0 && num <= 10) {
    return 1;
  }
  if ( num <= 20 ) {
    return 2;
  }
  if (num >= 21) {
    return 3;
  }
  return 0;
};

export { setRating };

