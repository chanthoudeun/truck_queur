export interface ILoginRep {
    token: string;
    userRowId?: number;
    userId?: string;
    fullName?: string;
    storeId?: string;
    storeName?: string;
    isMall?: boolean;
    isSupermarket?: boolean;

}