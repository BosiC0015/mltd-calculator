// common calculatiors
export function getDifference (target, current) {
  return target - current;
};

// calculators for PSTour events
export function getTourEventSongPlays(difference, items) {
  if (items === 3) {
    return difference / 2160;
  } else if (items === 2) {
    return difference / 1440;
  } else if (items === 1) {
    return difference / 720;
  };
};

export function getTourItemsNeeded(difference, currentItem) {
  return (difference / 720) - currentItem;
}

export function getTourRegularSongTimes(itemsNeeded, progress, stamina) {
  const unit = stamina / 5;
  const total = ((itemsNeeded - 1) * 20) + (20 - progress);
  return total / unit;
}