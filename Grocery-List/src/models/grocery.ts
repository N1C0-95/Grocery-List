import { Product } from "./products"

export interface Grocery {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string
    status: string
    products: Partial<Product>[]
    note: string
  }
  