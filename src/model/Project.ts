import { rainbow } from '../utils/rainbow';
import { uuidv4 } from '../utils/UUID';
import { generateHex } from '../utils/generateHex';

export interface IProject {
  id: string;
  title: string;
  description?: string;
  hexColor?: string;
}

export class Project implements IProject {
  constructor(public title: string, public hexColor?: string) {
    if (!hexColor) {
      this.hexColor = rainbow(1, 2);
      this.hexColor = generateHex(0.5, 0.95);
    }

    this.id = uuidv4();
  }

  public id: string;
  public description?: string;
}
