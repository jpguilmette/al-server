import { Project } from '../model/Project';

const PROJECT_01: Project = new Project('monPortail');
PROJECT_01.description = 'Projet monPortail';

const PROJECT_02: Project = new Project('Admission - AEL');

const PROJECT_03: Project = new Project('Admission - OGA');

export const PROJECTS_01: Project[] = [PROJECT_01, PROJECT_02, PROJECT_03];
