export class Model {
    user;
    items;

    constructor() {
        this.user = "İsmahan";
        this.items =[
            new TodoItem({ description: "spor", action: true }),
            new TodoItem({ description: "Kahvaltı", action: false }),
            new TodoItem({ description: "Kitap Okuma", action: false }),
            new TodoItem({ description: "Sinama", action: false })
          ];
    }
}

export class TodoItem {
    description;
    action;

    constructor({ description, action }: { description: string; action: boolean; }) {
        this.description = description;
        this.action = action;
    }
}