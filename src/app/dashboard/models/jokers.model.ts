export interface responseHTTP {
    total:number;
    result:jokers[]
}
export interface jokers{
    
        categories: string[],
        created_at?: Date,
        icon_url: string,
        id: string,
        updated_at?: Date,
        url: string,
        value: string
    
}