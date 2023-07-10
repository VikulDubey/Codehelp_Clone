let DarkButton = document.getElementById("darkmodeimg");
DarkButton.onclick = () => {
    let Body = document.body;
    Body.classList.toggle("dark_mode");
    let DarkToggleImg = document.getElementById('darktoggleimg');
    breadcrumb.classList.toggle("invert");
    DarkToggleImg.classList.toggle("invert");

};


let breadcrumb = document.querySelector('.menulogo');

breadcrumb.onclick = () => {
    let DarkModeImg = document.getElementById('darkmodeimg')
    DarkModeImg.classList.toggle('darkmodebtnafterbreadcrumb');

    let bookmarkslink = document.querySelector('.bookmarks') // Select the bookmarks

    bookmarkslink.classList.toggle('visible');
}
