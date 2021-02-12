document.querySelector('#form1').addEventListener('submit', e => {
    e.preventDefault()
    let elements = e.target.elements
    let score = 0
    for (const element of elements) {
        let value = Number(element.value)
        if (element.tagName === 'INPUT') {
            if (typeof value === 'number') {
                score += value
            } else {
                return document.querySelector('#score').innerHTML = 'Podaj liczby!'
            }
        }
    }
    document.querySelector('#score').innerHTML = score
})
