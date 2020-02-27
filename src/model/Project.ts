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
      this.hexColor = generateHex(0.75, 0.9);
    }

    this.id = uuidv4();
  }

  public id: string;
  public description?: string;
}
