import { INews } from './inews';

export class BusinessNews implements INews {
    author: string;    
    title: string;
    article: string;
    date: Date;
}
