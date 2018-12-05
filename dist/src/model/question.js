"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("uuid");
var Question = /** @class */ (function () {
    function Question(image, introduction, question, correctAnswer, bgColor, textColor, withAnswerField) {
        if (bgColor === void 0) { bgColor = "#FFFFFF"; }
        if (textColor === void 0) { textColor = "#000000"; }
        if (withAnswerField === void 0) { withAnswerField = true; }
        this.id = uuid();
        this.image = image;
        this.introduction = introduction;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.withAnswerField = withAnswerField;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map