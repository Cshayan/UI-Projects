const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

//function called on clicking tab-lists
function selectItem(e) {

    //remove border from the unselected tab-lists
    removeBorder();
    //remove the show class from the other unselected classes
    removeShow();

    //add border to current selected tab-list
    this.classList.add('tab-border');
    //grab the correct selected tab-content
    const selectedItem = document.getElementById(`${this.id}-content`);
    selectedItem.classList.add('show');
}

function removeBorder() {
    tabItem.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'));
}
//When clicked on the tab-list
tabItem.forEach(item => item.addEventListener('click', selectItem));