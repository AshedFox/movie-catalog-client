export const divideIntoSegments = (
  pagesCount: number,
  blockSize: number,
  currentPage: number,
) => {
  const items: number[] = [];
  const startItems: number[] = [];
  const endItems: number[] = [];

  if (pagesCount <= blockSize) {
    for (let i = 1; i <= pagesCount; i++) {
      items.push(i);
    }
  } else {
    const startItem = Math.max(1, currentPage - Math.floor(blockSize / 2));
    const endItem = Math.min(pagesCount, startItem + blockSize - 1);

    if (startItem > 1) {
      items.push(1);
      if (startItem > 2) {
        startItems.push(1);
        items.pop();
      }
    }

    for (let i = startItem; i <= endItem; i++) {
      items.push(i);
    }

    if (endItem < pagesCount) {
      if (endItem < pagesCount - 1) {
        endItems.push(pagesCount);
      } else {
        items.push(pagesCount);
      }
    }
  }

  return [startItems, items, endItems];
};
