export interface Drug {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface CartItem {
    drug: Drug;
    quantity: number;
}