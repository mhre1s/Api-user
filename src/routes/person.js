const express = require("express");
const apiPerson = require("../api/person");

const router = express.Router();

// Um POST para cada operação
router.get("/", apiPerson.FindAll);
router.get("/:id", apiPerson.FindById);
router.post("/", apiPerson.Create);
router.put("/:id", apiPerson.Update);
router.delete("/:id", apiPerson.Delete)

module.exports = router;
