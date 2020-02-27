import { uuidv4 } from '../utils/UUID';
import { generateHex } from '../utils/generateHex';

export interface ICategory {
  id: string;
  title: string;
  hexColor?: string;
}

export class Category implements ICategory {
  constructor(public title: string, public hexColor?: string) {
    if (!hexColor) {
      this.hexColor = generateHex(0.55, 1);
    }

    this.id = uuidv4();
  }

  public id: string;
}
