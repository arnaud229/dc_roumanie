export interface User {
    uid?: any
    nom: string,
    prenom: string,
     telephone: telephone,
    mail: string,
    mdp: string,
    age: number,
    sMatrimoniale: string,
    NEtude: string,
    metier: string,
    aDiplome: number,
    dApprentissage: number,  
    aExperience: number,
    ePrecedent: string,
    passport: boolean,
    nationalite: string,
    cWhatapp: telephone,
    parrain: string,
    religion: string,
    ldtep2: boolean,
    fils_recus: string[],
    admin: boolean,
    partenaire: boolean,
    LieuNaissance:string,
    dateNaissance: Date,
    paysNaissance:  string,
    Pere: names,
    Mere: names,
    nPasseport: string,
    lieuPasseport: string,
    dateEmiPasseport: Date,
    dateExpPasseport: Date,
    derniereResidence: string,
    derniereResidencePays: string,
    derniereResidenceVillage: string,
    qualiProfession: string,
    principalProfession: string,
    langueParler: string,
    expProfesionnel: experience[] ,
    nbrEnfants:number,
    dHonneur: boolean,  
    fils_diplome: string[],
    fil_photo: string,
    fil_passportPhoto: string,
    fil_casierJudiciere: string,
    isvalidePreselect : boolean,
    isvalidSelect: boolean,

}

export interface videoPresentation  {
    id?: any,
    secteur : string,
    description: string,
    fileVideo: string,
    uid: string,
    createdAt?: any,

}

export type experience = {
    entreprise: string;
    posteOccupe: string;
    datedebut: Date;
    datefin: Date;
}


export type names = {
    nom: string;
    prenoms: string
}

export type telephone = {
    code: string;
    numero: string
}

export type RecuFile = {
    type: string;
    url: string;
  };


