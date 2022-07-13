const handleMaxAndMin = (array) => {
    const max = array.reduce(function (prev, current) {
        return (prev.number > current.number) ? prev : current;
    });
    const min = array.reduce(function (prev, current) {
        return (prev.number < current.number) ? prev : current;
    });
    return [min.number, max.number];
}

module.exports = handleMaxAndMin;