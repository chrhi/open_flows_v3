export type ID = string | number

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



export  type User = {
    id:ID | undefined, 
    email:string ,
    photo_url : string , 
    name:string,
    workspaces?:any[] | undefined ,
    team? : [ID] | undefined
   }


//enums 
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
