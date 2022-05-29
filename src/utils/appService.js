import { getFilterType } from '../config';
const filterTypes = getFilterType();

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

const filterFunc = {
  // [filterTypes.ALL]: (dataSet) => dataSet.filter((dataItem) => dataItem),
  [filterTypes.WATCHLIST]: (dataSet) => dataSet.filter((dataItem) => dataItem.userDetails.isWatched),
  [filterTypes.HISTORY]: (dataSet) => dataSet.filter((dataItem) => dataItem.userDetails.isFavorite),
  [filterTypes.FAVORITES]: (dataSet) => dataSet.filter((dataItem) => dataItem.userDetails.isFavorite),
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};


const getFilterFunc = () => filterFunc;

export { setRating, getFilterFunc, updateItem };

