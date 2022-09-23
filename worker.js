onmessage = function (e) {
    console.log("Message from Main(UI) thread",e.data);
    start = e.data.start;
    last = e.data.last;
    total = 0;
    for (i = start; i <= last; i++) {
        total = total + i;
    }
    console.log(total);
    postMessage({total});
}