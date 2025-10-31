const express = require("express");
const { sum, minus, multiply, divide } = require("../services/exercicios");
const calculate = require("../api/calculate");

const router = express.Router();

// Um POST para cada operação
router.post("/sum", calculate(sum));
router.post("/minus", calculate(minus));
router.post("/multiply", calculate(multiply));
router.post("/divide", calculate(divide));

module.exports = router;
