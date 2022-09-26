export class Person {
    name!: string;
    type?: string;
    img!: string;
    description?: string;
    domain?: string;
    socials? : {
        facebook: string,
        instagram: string,
        twitter: string
    }
}