import {
  HeadingXSmall,
  LabelMedium
} from 'baseui/typography';
import {Button, KIND, SIZE} from 'baseui/button';
import {TCard} from '../types'

const Card = ({item}:TCard) => {
  return (
    <div className="flex flex-wrap gap-5 border-2 border-solid border-[#E1E1E1] p-2 rounded-md cursor-pointer hover:bg-slate-100">
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
        <HeadingXSmall>Harga</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>Rp. {item?.harga}</LabelMedium>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <Button size={SIZE.mini}>
          Edit
        </Button>
        <Button kind={KIND.secondary} size={SIZE.mini}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default Card