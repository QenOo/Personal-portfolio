// get my button
const myButton = document.getElementById('toggleMode');
const LinkDark = document.querySelector('link[href="css/mdb.dark.min.css"]');
// Fun toggle mode
myButton.addEventListener('click', function () {
    LinkDark.getAttribute('href') == 'css/mdb.dark.min.css'
        ? (LinkDark.setAttribute('href', 'css/mdb.min.css'),
          (myButton.innerHTML = 'Dark'))
        : (LinkDark.setAttribute('href', 'css/mdb.dark.min.css'),
          (myButton.innerHTML = 'Light'));
});

// console.log();
