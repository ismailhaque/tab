// get element 
const menu = document.querySelectorAll(`.ismail-tab .tab-menu ul li a`);
const contant = document.querySelectorAll(`.ismail-tab .tab-pane .contant`);


menu.forEach(item => {
    item.addEventListener(`click`, function(){
        menu.forEach(item => {
            item.classList.remove(`active`);
        });
        item.classList.add(`active`);

        const tab_pane = document.querySelector( this.getAttribute(`href`));
        contant.forEach(item => {
            item.classList.remove(`active`);
        });
        tab_pane.classList.add(`active`);
    })
})