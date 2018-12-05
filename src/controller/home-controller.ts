import {Router, Request, Response} from "express";
import {Question} from "../model/question";

const router: Router = Router();

const questions: Array<Question> = [

    new Question(
        "speurtocht.png",
        "Welkom bij de Sinterklaas-Speurtocht van 2018!",
        "Jullie moeten een aantal vragen gaan beantwoorden, met daar tussendoor een aantal HINTs. Als je een HINT krijgt, moet je iets in huis op gaan zoeken. Ben je er klaar voor? Voer dan 'ja' in het veld hieronder in.",
        /ja/i,
        "#F3BF9D",
        "#584935"
    ),
    new Question(
        "buitenspel.png",
        "VRAAG",
        "Hoe heet dit?",
        /buiten\s*spel/i,
        "#25f89c",
        "#007aa3"
    ),
    new Question(
        "wolf.jpg",
        "VRAAG",
        "Welke kleur ogen heeft een wolf bij de geboorte?",
        /bl[oa]uwe?/i,
        "#FFFFFF",
    ),
    new Question(
        "kachel.jpg",
        "HINT",
        "",
        /^31415$/i, // K
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "willem.jpg",
        "VRAAG",
        "Hoe oud ben ik?",
        /^(51|eenenvijftig)$/i,
        "#405D65",
        "#FFFFFF"
    ),
    new Question(
        "newyork.jpg",
        "VRAAG",
        "Welk beroemde beeld staat in New York?",
        /vrijheids?\s*beeld/i,
        "#024C67",
        "#F3E4C5"
    ),
    new Question(
        "paard.jpg",
        "HINT",
        "",
        /^x(y|ij)z$/i, // A
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "berlijn.png",
        "VRAAG",
        "In welke stad waren we hier?",
        /^berlijn$/i,
        "#6D4A2B",
        "#C7BFB9"
    ),
    new Question(
        "ea.png",
        "HINT",
        "",
        /^edo$/i, // N
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "kuyt.jpg",
        "VRAAG",
        "Hoe heet deze voetballer?",
        /(ku(y|ij|i)t|dirk)/i,
        "#6B8F35",
        "#F8FEFE"
    ),
    new Question(
        "capo.jpg",
        "HINT",
        "",
        /^pakjes$/i, // O
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "fast.png",
        "VRAAG",
        "Wat is het snelste dier?",
        /slecht\s*valk|peregrine\s+falcon/i,
        "#FFFFFF",
    ),
    // TODO
    new Question(
        "rot13.png",
        "HINT",
        "ROT13",
        /^b(ij|y)na$/i, // L
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "rebus.png",
        "VRAAG",
        "Wat gebeurt er in de weken na Sinterklaas?",
        /de\s*kerst\s*boom\s*op\s*tuig\s*en/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "pp.jpg",
        "HINT",
        "",
        /^einde$/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "theend.jpg",
        "Dat was inderdaad het einde!",
        "Propeer nu de zakken te vinden door iets te maken van alle hints...",
        /./i,
        "#151515",
        "#EEEEEE",
        false
    )
];

router.get("/", (req: Request, res: Response) => {
    const id = req.query.id ? req.query.id : questions[0].id;
    const question = questions.find(q => q.id === id);
    res.render("home", { question: question });
});

router.post("/check", (req: Request, res: Response) => {

    const id = req.body.id;
    const answer = req.body.answer;
    const question = questions.find(q => q.id === id);
    const index = questions.indexOf(question!);
    const nextId = index === questions.length - 1 ? index : index + 1;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ correct: !!question && !!answer.match(question.correctAnswer), nextId: questions[nextId].id }));
});

export const HomeController: Router = router;
