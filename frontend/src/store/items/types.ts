import { TResponseItems, TItem } from '../../commons/types'

export type TItemSlice = {
  data: TResponseItems | null;
  isLoading: boolean;
}

export type TGetItems = {
  page:number, 
  search:string
}

export type TDeleteItem = {
  id:number,
  items: TResponseItems
}

export type TAddItem = {
  sendData:TItem,
  items: TResponseItems
}