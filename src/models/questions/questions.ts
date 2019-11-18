export  default class Question {
    title: String
    answers: Answer[]

    constructor(data: IQuestion) {
        this.title = data.title
        this.answers = data.answers.map(answer => new Answer(answer))
    }
}

interface IQuestion {
    title: String
    answers: Answer[]
}

export class Answer {
    id: String
    text: String

    constructor(data: IAnswer) {
        this.id = data.id
        this.text = data.text
    }
}

interface IAnswer {
    id: String
    text: String
}