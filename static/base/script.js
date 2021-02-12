function getFirstVal () {
    let value = document.querySelector('#n1').value
    return value
}

function getSecondVal () {
    let value = document.querySelector('#n2').value
    return value
}

document.querySelector('button').addEventListener('click', e => {
    let value = getFirstVal()
    let value2 = getSecondVal()
    let score = value + value2;
    document.querySelector('#score').innerHTML = `Score: ${score}`
})