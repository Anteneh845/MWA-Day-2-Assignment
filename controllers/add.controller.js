module.exports.addTwoNumbers = (req, res) => {
    let firstNumber = parseInt(req.params.firstNumber);
    let secondNumber = parseInt(req.query.secondNumber);
    let sum = firstNumber + secondNumber;
    res.status(200).send(`<div> ${firstNumber} + ${secondNumber} = ${sum} </div>`);
}