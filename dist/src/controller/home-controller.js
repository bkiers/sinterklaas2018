"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var question_1 = require("../model/question");
var router = express_1.Router();
var questions = [
    new question_1.Question("buitenspel.png", "VRAAG", "Hoe heet deze spel situatie?", /buiten\s*spel/i, "#FFFFFF", "#000000"),
    new question_1.Question("paard.jpg", "HINT", "", /^x$/i, "#FFFFFF", "#000000"),
    new question_1.Question("ea.png", "HINT", "", /^x$/i, "#FFFFFF", "#000000"),
    new question_1.Question("capo.jpg", "HINT", "", /^x$/i, "#FFFFFF", "#000000"),
    new question_1.Question("rot13.png", "HINT: ROT13", "", /^x$/i, "#FFFFFF", "#000000"),
    new question_1.Question("kachel.jpg", "HINT", "", /^x$/i, "#FFFFFF", "#000000"),
    new question_1.Question("pp.jpg", "HINT", "", /^x$/i, "#FFFFFF", "#000000"),
    new question_1.Question("kuyt.jpg", "VRAAG", "Hoe heet deze voetballer?", /(ku(y|ij|i)t|dirk)/i, "#6B8F35", "#F8FEFE"),
    new question_1.Question("berlijn.png", "VRAAG", "In welke stad waren we hier?", /^berlijn$/i, "#6D4A2B", "#C7BFB9"),
    new question_1.Question("algebra.jpg", "VRAAG", "Wat is 'N' in de volgende vergelijking: (6 × N) + 18 = 144 ?", /^(21|eenentwintig)$/i, "#003000", "#CFEFD2"),
    new question_1.Question("willem.jpg", "VRAAG", "Hoe oud is koning Willem Alexander??", /^(51|eenenvijftig)$/i, "#405D65", "#FFFFFF"),
];
router.get("/", function (req, res) {
    var id = req.query.id ? req.query.id : questions[0].id;
    var question = questions.find(function (q) { return q.id === id; });
    res.render("home", { question: question });
});
router.post("/check", function (req, res) {
    var id = req.body.id;
    var answer = req.body.answer;
    var question = questions.find(function (q) { return q.id === id; });
    var index = questions.indexOf(question);
    var nextId = index === questions.length - 1 ? index : index + 1;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ correct: !!question && !!answer.match(question.correctAnswer), nextId: questions[nextId].id }));
});
exports.HomeController = router;
//# sourceMappingURL=home-controller.js.map