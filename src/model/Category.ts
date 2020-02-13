import { rainbow } from "../utils/rainbow";
import { uuidv4 } from "../utils/UUID";

export interface ICategory {
  id: string;
  title: string;
  hexColor?: string;
}

export class Category implements ICategory {
  constructor(public title: string, public hexColor?: string) {
    if (!hexColor) {
      this.hexColor = rainbow(1, 1);
    }

    this.id = uuidv4();
  }

  public id: string;
}
