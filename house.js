function house(input) {
    let n = Number(input[0]);
    let numRows = Math.floor((n + 1) / 2);
    let house = "";
    let dashes = 0;
    let dash = "";
    let nHouse = "";


    for (let rows = 0; rows < numRows; rows++) {
        if (n % 2 !== 0) {
            for (let odd = 1; odd <= numRows-1; odd++) {
                house += "*";
                if (odd % 2 !== 0) {
                    dashes = (n - odd)/2;
                    for (let d = 0; d < dashes; d++) {
                        dash += "-";
                   // console.log(dash + house + dash);

                    }
                   console.log(dash + house + dash);
                }
                //console.log(dash + house + dash);

            }
        } else {
            house = "**";
            even++;
            dashes = n - 2;
            if (dashes === 0) {
                dash = "";
            }
        }
        if (numRows - 1 === rows) {
            for (let j = 0; j < n; j++) {
                nHouse += "*";
            }
        }
    }

    //console.log(dash + house + dash);
   // console.log(nHouse);

}
house(
    [
        "5"
    ]
)