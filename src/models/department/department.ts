export default class Department {
    name: String
    answers: SurveyResponse[]
    constructor(data: IDepartment) {
        this.name = data.name
        this.answers = data.answers
    }
}

interface IDepartment {
    name: String
    answers: SurveyResponse[]
}