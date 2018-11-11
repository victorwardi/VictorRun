import {Technology} from './technology.model';
import {Company} from './company.model';

export class Project {

  public id: string;
  public title: string;
  public description: string;
  public company: Company;
  public technologies: Technology[];

}
