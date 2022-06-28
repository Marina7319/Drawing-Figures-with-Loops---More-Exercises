function rhombusOfStars(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let resultOne = "";
    let resultTwo = "";
    for (let row = 1; row < n; row++) {
        resultTwo += " ";
        // resultTwo += "*";
        for (let rowTwo = 1; rowTwo < row - 1; rowTwo++) {

            resultOne += "* "
            console.log(resultOne);

        }
    }
    resultTwo += "*";

    console.log(resultTwo);
    console.log(resultOne);


}
rhombusOfStars(
    [
        "6"
    ]
)