import { TItem } from '../../commons/types';

export const OVERRIDES = {
  Root: {style: {width: '100%', border:0}},
  HeaderImage: {
    style: () => ({
     height: '400px',
     width: '100%'
    })
  }
}

export type TModalSelector = {
  modalData:{
    item:TItem,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items:any,
    isEdit: boolean
  }, 
  modalName:string
}
