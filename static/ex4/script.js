document.querySelector('.btn__check').addEventListener('click', e => {
    document.querySelectorAll('.exercise').forEach(exercise => {
        const factors = exercise.querySelectorAll('.factor')
        const sum = exercise.querySelectorAll('.sum')
        let factorsSum = 0
        factors.forEach(factor => {
            factorsSum += Number(factor.value)
        })
        exercise.querySelector('span').innerHTML = factorsSum === Number(sum.value)
    })
})
