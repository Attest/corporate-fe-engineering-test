export default class NavigationItem {
    text: String
    link: String

    constructor(data: INavigationItem) {
        this.text = data.text
        this.link = data.link
    }
}

export interface INavigationItem {
    text: String,
    link: String
}