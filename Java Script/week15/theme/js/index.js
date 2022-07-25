function changeTheme() {
    let theme = document.querySelector("#theme").value;
    switch (theme) {
        case 'light':
            document.body.style.background = 'white';
            document.body.style.color = 'grey';
            break;
        case 'blue':
            document.body.style.background = 'rgba(74, 74, 252, 0.877)';
            document.body.style.color = 'white';
            break;
        case 'red':
            document.body.style.background = 'red';
            document.body.style.color = 'white';
            break;
        case 'pink':
            document.body.style.background = 'pink';
            break;
        case 'yellow':
            document.body.style.background = 'lightyellow';
            document.body.style.color = 'grey';
            break;
    }
}