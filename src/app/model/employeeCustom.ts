export class User {
    private id: number;
    private date: Date;
    private username: string;
    private age: number;
    private status: boolean;

    public get Username(): string {
        return this.username;
    }
    public set Username(name: string) {
        this.username = name;
    }

    public get Date(): Date {
        return this.date;
    }
    public set Date(date: Date) {
        this.date = date;
    }

    public get Id(): number {
        return this.id;
    }
    public set Id(id: number) {
        this.id = id;
    }

    public get Age(): number {
        return this.age;
    }
    public set Age(age: number) {
        this.age = age;
    }

    public get Status(): boolean {
        return this.status;
    }
    public set Status(status: boolean) {
        this.status = status;
    }


}