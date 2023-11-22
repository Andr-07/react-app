export const addOrder = (actualCount, setCount) => {
    if (actualCount < 5) {
        ++actualCount
    }
    setCount(actualCount);
};

export const reduceOrder = (actualCount, setCount) => {
    if (actualCount > 0) {
        --actualCount
    }
    setCount(actualCount);
};
