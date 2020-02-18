import { Project } from './Project';
import { Category } from './Category';
import { uuidv4 } from '../utils/UUID';

export class Task {
  constructor(
    public title: string,
    public description: string,
    public projects: Project[],
    public categories: Category[],
    public deadline?: Date,
    public done?: boolean,
  ) {
    if (done === undefined) {
      done = false;
    }

    this.id = uuidv4();
    this.createOn = new Date();
  }

  public id: string;
  public createOn: Date;
  public doneOn?: Date;
  public order?: number;
  public subTasks?: Task[];
  public jiraNumber?: string;
}
