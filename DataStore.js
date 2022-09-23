let listOfItems = [];
onmessage = function (e) {
    console.log("Message from Main(UI) thread",e.data);
    addItem(e.data)
    postMessage(listOfItems);
}

addItem = (item) => {
    listOfItems.push(item);
}