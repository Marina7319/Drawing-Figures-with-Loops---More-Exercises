function squareFrame(input)
{
 
        let num = Number(input[0]);
        let buff = "";
        for (let i = 0; i < num; i++) {
            buff += "+" + "-"*num + "+";
        }
        for (let j = 0; j < num; j++) {
            console.log(buff);
        }
    
}
squareFrame(
    [
        "5"
    ]
)