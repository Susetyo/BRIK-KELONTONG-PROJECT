export type TItem = {
  id: number,
  sku: string,
  name: string,
  description: string,
  weight:number,
  width: number,
  length: number,
  height: number,
  image_url: string,
  price: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoryId: any,
  createdAt: string,
  updatedAt: string
}

export type TCard ={
  item: TItem
}
