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
    noFilRecu?: boolean,
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
    isProcessSucceful: boolean,
    adminId: any,
    adminPrenoms: string,
    paysDestination?: string,

}

export interface videoPresentation  {
    id?: any,
    secteur : string,
    description: string,
    fileVideo: string,
    user_id: string,
    nom: string,
    prenoms: string
    createdAt?: any,
    isvalidVideo: boolean;
    isvalideProcess: boolean,
    observation: string;
    partenairePrenom: string,
    partenaireId: any,

}

export interface coaching  {
    id?: any,
    tittre : string,
    description: string,
    fileVideo: string,
     createdAt?: any,

}

export interface coursAnglaire  {
    id?: any,
    tittre : string,
    description: string,
    fileVideo: string,
     createdAt?: any,

}

export interface dette {
    id?: any,
    montantDu: number,
    dateDette: Date,
    libele: string,
    nom: string,
    prenoms: string,
    createdAt?: any,
    user_id: any,
    adminNom: string,
}

export interface remboursement {
    id?: any,
    montantRembourse: number,
    dateRemboursement: Date,
    libele: string,
    nom: string,
    prenoms: string,
    createdAt?: any,
    user_id: any,
    adminNom: string,
}

export type experience = {
    entreprise: string;
    posteOccupe: string;
    dateDebut: Date;
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


