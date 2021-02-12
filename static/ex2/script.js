document.querySelector('button').addEventListener('click', e => {
    var n1 = Number(document.querySelector('input[name=n1]').value) || 1
    var n2 = Number(document.querySelector('input[name=n2]').value) || 1
    n3 = Number(document.querySelector('input[name=n3]').value) || 1
    var n4 = Number(document.querySelector('input[name=n4]').value) || 1
    var isN3Deleted
    var isN4Deleted

    if(!document.querySelector('#c3').checked) {
        isN3Deleted = delete n3
    }

    if(!document.querySelector('#c4').checked) {
        isN4Deleted = delete n4
    }

    var sum = 1
    sum *= n1
    sum *= n2

    if (!isN3Deleted) {
        sum *= n3
    }

    if (isN4Deleted) {
        sum *= n4
    }

    document.querySelector('#score').innerHTML = sum
})
