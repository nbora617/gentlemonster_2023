const input = document.querySelectorAll('fieldset > div')
console.log(input)
for(let i of input){
    i.addEventListener('click',function(){
        i.style.border = '1px solid #BB2649'
    })
}