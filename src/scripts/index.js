import '../scss/index.scss'; // needed to compile sass into a css file

console.log('this!');

let sel = '.js-collapse';

if (document.querySelectorAll(sel).length) {

    let aCollapsers = document.querySelectorAll(sel);
    const CLASS_TOGGLER = '.js-collapse-trigger',
        CLASS_TARGET = '.js-collapse-target';

    console.log(aCollapsers);

    for (let section of aCollapsers) {

        let s = new Collapser(section);


        // console.log(section);
        // let toggler = section.getElementsByClassName(CLASS_TRIGGER);
        // toggler.addEventListener('click', function(e){
        //     console.log(e);
        // });

    }
    ;

    function Collapser(section) {

        //this.trigger
        //
        let toggler = section.querySelector(CLASS_TOGGLER);
        let target = section.querySelector(CLASS_TARGET);

        if (toggler) {
            console.log('inside collapser', toggler, toggler.classList, toggler.className);

            toggler.addEventListener('click', function (e) {
                console.log(this, e);
                section.classList.toggle('is-active');
            });
        }


    }


}