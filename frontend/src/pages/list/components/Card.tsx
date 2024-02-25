import {
  HeadingXSmall,
  LabelMedium
} from 'baseui/typography';
import {Button, KIND, SIZE} from 'baseui/button';
import {TCard} from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState} from '../../../store/store';
import {openModal} from '../../../store/modal/modalSlice';
import {deleteItem} from '../../../store/items/itemsSlice';
import { StatefulPopover } from "baseui/popover";
import {
  Overflow
} from 'baseui/icon';
import {Block} from 'baseui/block';



const Card = ({item}:TCard) => {
  const items = useSelector((state:RootState) => state.items);
  const dispatch = useDispatch<AppDispatch>();
  const onClick = () => {
    dispatch(openModal({modalData:item, modalName: "modalDetail"}))
  }
  const onDelete = () => {
    dispatch(deleteItem({id:item?.id, items:items?.data}))
  }

  return (
    <div className="flex flex-wrap gap-5 border-2 border-solid border-[#E1E1E1] p-2 rounded-md cursor-pointer hover:bg-slate-100 z-0">
      <img width={56} height={56} src={item?.image} />
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Product Name</HeadingXSmall>
        <div className="flex flex-col justify-center mt-2">
          <LabelMedium>{item?.name}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>SKU</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>{item?.sku}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Category</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>Test</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2 w-[350px]'>
        <HeadingXSmall>Description</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>{item?.description}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Width</HeadingXSmall>
        <div className="flex items-center mt-2 justify-center">
          <LabelMedium>{item?.width}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Length</HeadingXSmall>
        <div className="flex items-center mt-2 justify-center">
          <LabelMedium>{item?.length}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Height</HeadingXSmall>
        <div className="flex items-center mt-2 justify-center">
          <LabelMedium>{item?.height}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Price</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>Rp. {item?.harga}</LabelMedium>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <StatefulPopover
          content={() => (
            <Block padding={"10px"}>
              <Button
                onClick={onClick}     
                overrides={{
                  BaseButton: {
                    style: () => ({
                      width: '100%'
                    })
                  }
                }}
                kind={KIND.secondary} 
                size={SIZE.mini}>
                  Detail
              </Button>
              <Button       
                overrides={{
                  BaseButton: {
                    style: () => ({
                      width: '100%'
                    })
                  }
                }}
                kind={KIND.secondary} 
                size={SIZE.mini}>
                  Edit
              </Button>
              <Button 
                overrides={{
                  BaseButton: {
                    style: () => ({
                      width: '100%',
                      color: 'red'
                    })
                  }
                }} 
                onClick={onDelete} 
                kind={KIND.secondary} 
                size={SIZE.mini}>
                Delete
              </Button>
            </Block>
          )}
          returnFocus
          autoFocus
        >
          <Button size={SIZE.compact} kind={KIND.secondary}><Overflow /></Button>
        </StatefulPopover>
      </div>
    </div>
  )
}

export default Card