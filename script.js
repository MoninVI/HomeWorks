function consoleRec(a, b) {
    console.log(a[b]);
    b += 1
    if (b < a.length) {
        consoleRec(a, b);
    }
};

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);