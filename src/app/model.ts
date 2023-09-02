export class Model {
    user;
    items;

    constructor() {
        this.user = "İsmahan";
        this.items =[
            new TodoItem("spor",true),
            new TodoItem("yemek",false),
            new TodoItem("uyku",false),
            new TodoItem("kitap okuma",false),

        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}