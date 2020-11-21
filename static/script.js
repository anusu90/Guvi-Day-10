var w = $(window);

w.resize(() => {
    if (w.width() <= 1200){
        let v1 = document.getElementById('left-header-text');
        v1.classList.add('text-truncate');

        // v1.setAttribute('text-overflow','ellipsis')

        let v2 = document.getElementById('right-header-text');
        v2.classList.add('text-truncate');

    } else if (w.width() > 1200){
        let v1 = document.getElementById('left-header-text');
        v1.classList.remove('text-truncate');

        let v2 = document.getElementById('right-header-text');
        v2.classList.remove('text-truncate')
    }
});

// let d = String(new Date()).slice(0,15);
// console.log(d);

let d = document.getElementById("date")
d.innerHTML = String(new Date()).slice(0,15);
