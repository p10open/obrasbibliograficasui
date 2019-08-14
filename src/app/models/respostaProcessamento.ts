import { ObraBibliografica } from '../models/obraBibliografica';

export class RespostaProcessamento {
    sucesso: boolean;
    mensagem: string;
    obrasBibliograficas: ObraBibliografica[]
}