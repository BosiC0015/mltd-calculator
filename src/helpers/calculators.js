// common calculatiors
export function getDifference (target, current) {
  return target - current;
};

// calculators for PSTheater events
export function getTheaterEventSongPlays(difference, items) {
  let result;

  if (items === 720) {
    result = (difference / 2148);
  } else if (items === 360) {
    result = (difference / 1074);
  } else if (items === 180) {
    result = (difference / 537);
  };

  const ceiledResult = Math.ceil(result);

  return ceiledResult;
};

export function getTheaterItemsNeeded(difference, theaterPointPerItem) {
  let result;
  result = difference / theaterPointPerItem;
  const ceiledResult = Math.ceil(result);
  return ceiledResult;
}

export function getTheaterRegularSongTimes(itemsNeeded, eventItems) {
  let result;
  result = (itemsNeeded - eventItems) / 595;
  const ceiledResult = Math.ceil(result);
  return ceiledResult;
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
};

export function getTourRegularSongTimes(itemsNeeded, progress, stamina) {
  const unit = stamina / 5;
  const total = ((itemsNeeded - 1) * 20) + (20 - progress);
  return total / unit;
};

// calculators for PSTune events
export function getTuneEventSongPlays(items, desk, difference) {
  if (items === 560) {
    return difference / (1960 * (1 + desk * 0.01))
  } else if (items === 280) {
    return difference / (980 * (1 + desk * 0.01))
  } else if (items === 140) {
    return difference / (490 * (1 + desk * 0.01))
  };
};