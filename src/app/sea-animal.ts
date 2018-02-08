export class SeaAnimal {
    order: number;
    picture: string = '';
    name: string = '';
    mammal: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
