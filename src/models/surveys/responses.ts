import {Answer} from "@/models/questions/questions";

export default class SurveyResponse {
    title: string
    answers: SurveyAnswer[]

    constructor(data: SurveyResponse) {
        this.title = data.title
        this.answers = data.answers
    }
}

export class SurveyAnswer extends Answer {
    value: number

    constructor(entries: [string, number], answerMap: Answer[]) {
        let matchedAnswerType: Answer | undefined
        matchedAnswerType = answerMap.find(answer => answer.id === entries[0])

        super({
            id: entries[0],
            text: matchedAnswerType ? matchedAnswerType.text : entries[0]
        })
        this.value = entries[1]
    }
}
