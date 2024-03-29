//todo.routes.js

const express = require("express");

const router = express.Router();

const {
    listAllTodo,
    createOneTodo,
    updateOneTodo,
    deleteTodo,
  } = require("../controllers/todo.controller.js");

router.get("/", listAllTodo);

router.post("/", createOneTodo);

router.put("/:id", updateOneTodo);

router.delete("/:id", deleteTodo);

module.exports = router;