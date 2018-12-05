"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var question_1 = require("../model/question");
var router = express_1.Router();
var questions = [
    new question_1.Question("speurtocht.png", "Welkom bij de Sinterklaas-Speurtocht van 2018!", "Jullie moeten een aantal vragen gaan beantwoorden, met daar tussendoor een aantal HINTs. Als je een HINT krijgt, moet je iets in huis op gaan zoeken. Ben je er klaar voor? Voer dan 'ja' in het veld hieronder in.", /ja/i, "#F3BF9D", "#584935"),
    new question_1.Question("buitenspel.png", "VRAAG", "Hoe heet dit?", /buiten\s*spel/i, "#25f89c", "#007aa3"),
    new question_1.Question("wolf.jpg", "VRAAG", "Welke kleur ogen heeft een wolf bij de geboorte?", /bl[oa]uwe?/i, "#FFFFFF"),
    new question_1.Question("kachel.jpg", "HINT", "", /^31415$/i, // K
    "#FFFFFF", "#000000"),
    new question_1.Question("willem.jpg", "VRAAG", "Hoe oud ben ik?", /^(51|eenenvijftig)$/i, "#405D65", "#FFFFFF"),
    new question_1.Question("newyork.jpg", "VRAAG", "Welk beroemde beeld staat in New York?", /vrijheids?\s*beeld/i, "#024C67", "#F3E4C5"),
    new question_1.Question("paard.jpg", "HINT", "", /^x(y|ij)z$/i, // A
    "#FFFFFF", "#000000"),
    new question_1.Question("berlijn.png", "VRAAG", "In welke stad waren we hier?", /^berlijn$/i, "#6D4A2B", "#C7BFB9"),
    new question_1.Question("ea.png", "HINT", "", /^edo$/i, // N
    "#FFFFFF", "#000000"),
    new question_1.Question("kuyt.jpg", "VRAAG", "Hoe heet deze voetballer?", /(ku(y|ij|i)t|dirk)/i, "#6B8F35", "#F8FEFE"),
    new question_1.Question("capo.jpg", "HINT", "", /^pakjes$/i, // O
    "#FFFFFF", "#000000"),
    new question_1.Question("fast.png", "VRAAG", "Wat is het snelste dier?", /slecht\s*valk|peregrine\s+falcon/i, "#FFFFFF"),
    // TODO
    new question_1.Question("rot13.png", "HINT", "ROT13", /^b(ij|y)na$/i, // L
    "#FFFFFF", "#000000"),
    new question_1.Question("rebus.png", "VRAAG", "Wat gebeurt er in de weken na Sinterklaas?", /de\s*kerst\s*boom\s*op\s*tuig\s*en/i, "#FFFFFF", "#000000"),
    new question_1.Question("pp.jpg", "HINT", "", /^einde$/i, "#FFFFFF", "#000000"),
    new question_1.Question("theend.jpg", "Dat was inderdaad het einde!", "Propeer nu de zakken te vinden door iets te maken van alle hints...", /./i, "#151515", "#EEEEEE", false)
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