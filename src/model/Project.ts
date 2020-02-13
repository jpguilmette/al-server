import { rainbow } from '../utils/rainbow';
import { uuidv4 } from '../utils/UUID';

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
    }

    this.id = uuidv4();
  }

  public id: string;
  public description?: string;
}
