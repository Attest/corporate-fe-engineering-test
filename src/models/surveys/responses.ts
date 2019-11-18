import {Answer} from "@/models/questions/questions";
import {ISurveyResponse} from "@/models/department/department";

export default class SurveyResponse {
    title: string
    answers: ISurveyResponse[]

    constructor(data: SurveyResponse) {
        this.title = data.title
        this.answers = data.answers
    }

}
