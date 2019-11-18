import SurveyResponse from "@/models/surveys/responses";

export default class Department {
    name: String
    responses: ISurveyResponse[]
    constructor(data: IDepartment) {
        this.name = data.name
        this.responses = data.responses
    }
}

export interface DepartmentMap {
    [key: string]: Department
}

interface IDepartment {
    name: String
    responses: ISurveyResponse[]
}

export interface ISurveyResponse {
    [x: string]: any
}