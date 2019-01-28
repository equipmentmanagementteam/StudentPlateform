import { Equipement } from './Equipement';
import { Utilisateur } from './Utilisateur';

export class Command {
    id:number;
    ref:string;
    student:Utilisateur;
    equipement:Equipement;
    quantity:number;
    date:string;
}
