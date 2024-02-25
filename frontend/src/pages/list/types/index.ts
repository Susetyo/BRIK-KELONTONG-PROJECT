export type TItem = {
  id: number,
  sku: string,
  name: string,
  description: string,
  weight:number,
  width: number,
  length: number,
  height: number,
  image: string,
  harga: number,
  category_id: number,
  createdAt: string,
  updatedAt: string
}

export type TCard ={
  item: TItem
}
