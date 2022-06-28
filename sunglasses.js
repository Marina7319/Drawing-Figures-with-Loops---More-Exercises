function sunglasses(input) {
    let n = Number(input[0]);
    let sunglasses = "";
    let sunglassesMiddle = "";
    let intervals = "";
    let middle = "";
    for (let i = 0; i < 2*n; i++) {
        sunglasses += "*";
    }
    for (let i = 0; i < n; i++) {
        sunglasses += " ";
    }
    for (let i = 0; i < 2*n; i++) {
        sunglasses += "*";
    }
    for (let i = 0; i < 2*n-2; i++) {
        sunglassesMiddle += "/";
    }
    for (let i = 0; i < n; i++) {
        intervals += " ";
        middle += "|";
    }

    console.log(sunglasses);
    for(let g = 0; g < n - 3; g++)
    {
        //if(g !== g/2){
        console.log("*" + sunglassesMiddle + "*" + intervals + "*" + sunglassesMiddle + "*");
       // }
        if(g===0){
        console.log("*" + sunglassesMiddle + "*" + middle + "*" + sunglassesMiddle + "*");
        }
    }
    console.log(sunglasses);

}
sunglasses(
    [
        "4"
    ]
)