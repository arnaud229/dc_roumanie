export interface Use {
    id?: any
    nom: string,
    prenom: string,
     telephone: string,
    mail: string,
    mdp: string,
    age: string,
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
    filss: RecuFile[],


}

export type RecuFile = {
    type: string;
    url: string;
  };