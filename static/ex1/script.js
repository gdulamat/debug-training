document.querySelector('#form1').addEventListener('submit', e => {
    e.preventDefault()
    let elements = e.target.elements
    let score = 0
    for(let i =0; i < elements.length; i++) {
        if(elements[i].tagName === 'INPUT') {
            let fieldValue = Number(elements[i]).value
            score += fieldValue
        }
    }
    document.querySelector('#score').innerHTML = score
})
