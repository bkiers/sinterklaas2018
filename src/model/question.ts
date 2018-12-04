import uuid = require("uuid");

export class Question {

    public readonly id: string;
    public readonly image?: string;
    public readonly introduction?: string;
    public readonly question?: string;
    public readonly correctAnswer?: RegExp;
    public readonly bgColor: string;
    public readonly textColor: string;

    constructor(image?: string, introduction?: string, question?: string, correctAnswer?: RegExp, bgColor: string = "#FFFFFF", textColor: string = "#000000") {
        this.id = uuid();
        this.image = image;
        this.introduction = introduction;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.bgColor = bgColor;
        this.textColor = textColor;
    }
}