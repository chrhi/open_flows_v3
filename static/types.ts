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

type client ={
    client:string ,
    email:string ,
    description?:string
}

export type item ={
    description?:string ,
    price:number ,
    quantity:number ,

}


export type Invoice = {
    invoiceFrom : string ,
    invoiceDetails?:string,
    client:client,
    note?:string ,
    discount?:number ,
    tax?:number,
    items:item[] | []
}


export  type User = {
    id:ID | undefined, 
    email:string ,
    photo_url : string , 
    name:string,
    last_name:string ,
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
