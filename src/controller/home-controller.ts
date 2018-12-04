import {Router, Request, Response} from "express";
import {Question} from "../model/question";

const router: Router = Router();

const questions: Array<Question> = [
    new Question(
        "buitenspel.png",
        "VRAAG",
        "Hoe heet deze spel situatie?",
        /buiten\s*spel/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "paard.jpg",
        "HINT",
        "",
        /^x$/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "ea.png",
        "HINT",
        "",
        /^x$/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "capo.jpg",
        "HINT",
        "",
        /^x$/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "rot13.png",
        "HINT: ROT13",
        "",
        /^x$/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "kachel.jpg",
        "HINT",
        "",
        /^x$/i,
        "#FFFFFF",
        "#000000"
    ),
    new Question(
        "pp.jpg",
        "HINT",
        "",
        /^x$/i,
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
        "berlijn.png",
        "VRAAG",
        "In welke stad waren we hier?",
        /^berlijn$/i,
        "#6D4A2B",
        "#C7BFB9"
    ),
    new Question(
        "algebra.jpg",
        "VRAAG",
        "Wat is 'N' in de volgende vergelijking: (6 × N) + 18 = 144 ?",
        /^(21|eenentwintig)$/i,
        "#003000",
        "#CFEFD2"
    ),
    new Question(
        "willem.jpg",
        "VRAAG",
        "Hoe oud is koning Willem Alexander??",
        /^(51|eenenvijftig)$/i,
        "#405D65",
        "#FFFFFF"
    ),
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
