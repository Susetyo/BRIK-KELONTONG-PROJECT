import {
  HeadingXSmall,
  LabelMedium
} from 'baseui/typography';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState} from '../../../store/store';
import {openModal} from '../../../store/modal/modalSlice';
import {TCategory} from '../../add';
import {useEffect} from 'react';
import {getCategories} from "../../../store/categories/categoriesSlice";
import { TCard } from '../../../commons/types';


const Card = ({item}:TCard) => {
  const categorySelector = useSelector((state:RootState) => state.categories);
  const items = useSelector((state:RootState) => state.items);
  const dispatch = useDispatch<AppDispatch>();
  const findCategory = categorySelector?.data?.find((category:TCategory) => category.id === parseInt(item?.categoryId))

  useEffect(() =>{
    dispatch(getCategories());
  },[dispatch]);

  const onClick = () => {
    dispatch(openModal({modalData:{item:item, items:items, isEdit: false}, modalName: "modalDetail"}))
  }

  return (
    <div onClick={onClick} className="flex flex-wrap gap-5 border-2 border-solid border-[#E1E1E1] p-2 rounded-md cursor-pointer hover:bg-slate-100 z-0">
      <img width={56} height={56} src={item?.image_url} />
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
          <LabelMedium>{findCategory?.categoryName || '-'}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
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
      <div className=''>
        <HeadingXSmall>Price</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>Rp. {item?.price}</LabelMedium>
        </div>
      </div>
    </div>
  )
}

export default Card