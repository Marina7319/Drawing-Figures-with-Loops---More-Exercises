function triangleOfDollars(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let buffOne = "$";
    let buffTwo = "";
    for (let row = 0; row < n; row++) {
        buffTwo = "$";
        for (let col = 1; col <= row; col++) {
            buffTwo += " $";
            //console.log(buffTwo);
        }
        console.log(buffTwo);

    }
}
triangleOfDollars(
    [
        "4"
    ]
)