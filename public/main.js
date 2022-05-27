getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script);
        }
    };
    request.send();
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    };
    request.send();
};
getXMl.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    };
    request.send();
};
function X(n) {
    if (n < 2) {
        getPage.style.display = "block";
    }
    else if (n > 2) {
        getPage.style.display = "none";
    }
}
let n = 1
getPage.onclick = () => {
    n++;
    const request = new XMLHttpRequest();
    if (n <= 3) {
        console.log(n);
        request.open('GET', `/page${(n)}`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
            }
        };
        request.send();
        if (n === 3) {
            getPage.style.display = "none";
        }
    }
};




