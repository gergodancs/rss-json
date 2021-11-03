function readNews() {
    fetch("rss.json")
        .then((r) => r.json())
        .then(renderNews);
}

function renderNews(news) {
    let items = new.items;
    for (let item of items) {
        renderItem(item);
    }
}

function renderItem(item){
    let box = document.createElement('div');

    let title = document.createElement('h1');

    let desc = document.createElement('p');

    title.innerText = item.tittle;

    desc.innerText = item.summary;

    box.append(tittle, desc);
    document.getElementById('rss').append(box);
}

window.addEventListener('load', readNews);

