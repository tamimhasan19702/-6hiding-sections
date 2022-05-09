const box = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBox)

checkBox()

function checkBox(){
    const toggleCount = window.innerHeight / 5 * 4

    box.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < toggleCount) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}