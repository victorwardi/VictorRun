import {ID} from './id.model';

export class Post implements ID {

  public id: string;
  public title: string;
  public content: string;
  public published: Date;
  public updated: Date;



}
