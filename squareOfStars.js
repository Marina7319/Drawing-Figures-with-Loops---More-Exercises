function squareOfStars(input) {
    let num = Number(input[0]);
    let buffOne = "+";
    let buffTwo = "|";
    for (let i = 0; i < num - 2; i++) {
        buffOne += " -";
        buffTwo += " -";
    }
    buffOne += " +";
    buffTwo += " |";
    console.log(buffOne);
    for (let j = 0; j < num-2; j++) {
        console.log(buffTwo);
    }
    console.log(buffOne);
}
squareOfStars(
    [
        "6"
    ]
)