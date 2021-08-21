import { PhotoOrientation } from "./enums/photoOrientation";
import { Item } from "./item";

export class Picture extends Item {
    public constructor(id: number, 
                        title:string, 
                        private _date: string, 
                        private _orientation: PhotoOrientation){
        super(id, title);
    }

    public toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this._orientation},
                date: ${this._date}]`;
    }
}