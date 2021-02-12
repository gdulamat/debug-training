document.querySelector('.btn__check').addEventListener('click', e => {
    document.querySelectorAll('.exercise').forEach(exercise => {
        const factors = exercise.querySelectorAll('.factor')
        const leftSide = Number(factors[0].value) + Number(factors[1].value).toFixed(1)
        const rightSide = Number(factors[2].value) + Number(factors[3].value).toFixed(1)
        exercise.querySelector('span').innerHTML = leftSide === rightSide
    })
})
