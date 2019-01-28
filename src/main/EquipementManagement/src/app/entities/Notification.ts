import { Utilisateur } from './Utilisateur';

export class Notification {
    id:number;
    sender:Utilisateur;
    receiver: Utilisateur;
    text:string;
    status:number;
    date:string;
}
