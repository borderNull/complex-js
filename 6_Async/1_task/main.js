function timer(time) {
    return new Promise((res, req) => {
        setTimeout(res, time)
    })
};

timer(4000).then(() => {
    console.log("функция вывелась через 4 секунды");
});
