function factorial (nb) {
    if(nb == 1)
        return 1

    return nb * factorial(--nb)
}

console.log(factorial(5))