document.querySelector('.btn__check').addEventListener('click', e => {
    document.querySelectorAll('.exercise').forEach(exercise => {
        const factors = exercise.querySelectorAll('.factor')
        const leftSide = Number(factors[0].value) - Number(factors[1].value)
        const rightSide = Number(factors[2].value) - Number(factors[3].value)
        exercise.querySelector('span').innerHTML = leftSide === rightSide.toFixed(1)
    })
})
