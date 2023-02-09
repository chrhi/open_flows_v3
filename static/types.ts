type ID = string | number

export type Flow = {
    id: number | string ,
    image :string , 
    title :string , 
    description :string , 
    createdAT : string , 
    startsAt:string ,
    endsAt:string , 
    tag:string ,
    creator: number | string ,
}



export type Account = {

}

export type User = {
    username : string,
    email: string,
    photoURL:string,
    user_id:ID,
    work_spaces: [ID]
    team :[ID] | null,
    settings : ID | null
}

