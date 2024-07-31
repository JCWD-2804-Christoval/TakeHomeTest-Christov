export interface Drug {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface CartItem {
    id: number;
    drugId: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    items: CartItem[];
    totalAmount: number;
    shippingAddress: string;
    paymentMethod: string;
    status: string;
  }