export interface User {
    id?: any
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
    cWhatapp: string,
    parrain: string,
    region: string,
    ldtep2: string,
    fils: RecuFile[],
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
    pricipalProfession: string,
    langueParler: string,
    expProfesionnel: experience[] ,
    nbrEnfants:number,
    dHonneur: boolean,  
    fils_diplome: RecuFile[],
    fil_photo: RecuFile,
    fil_passportPhoto: RecuFile,
    fil_casierJudiciere: RecuFile,

}

export type experience = {
    entreprise: string;
    posteOccupe: string;
    periode: string;
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