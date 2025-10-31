function calculate(operation) {
  return (req, res) => {
    const { firstNum, secondNum } = req.body;

    const num1 = Number(firstNum);
    const num2 = Number(secondNum);

    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).send({ error: "Os valores devem ser números." });
    }

    // Tratamento para divisão por zero
    if (operation.name === "divide" && num2 === 0) {
      return res
        .status(400)
        .send({ error: "Divisão por zero não é permitida." });
    }

    const result = operation(num1, num2);
    res.status(200).send({ result });
  };
}

module.exports = calculate;
