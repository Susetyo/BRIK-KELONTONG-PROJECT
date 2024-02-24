import {
  HeadingXSmall,
  LabelMedium
} from 'baseui/typography';
import {Button, KIND, SIZE} from 'baseui/button';

function Card() {
  const dummyData = {
    "id": 86,
    "CategoryId": 14,
    "categoryName": "Cemilan",
    "sku": "MHZVTK",
    "name": "Ciki ciki",
    "description": "Ciki ciki yang super enak, hanya di toko klontong kami",
    "weight": 500,
    "width": 5,
    "length": 5,
    "height": 5,
    "image": "https://images.tokopedia.net/img/cache/900/attachment/2020/3/30/158557267240045/158557267240045_df3b63b4-a4aa-409d-8666-7e091bfc5ec3.png",
    "harga": 30000
  }

  return (
    <div className="flex flex-wrap gap-5 border-2 border-solid border-[#E1E1E1] p-2 rounded-md">
      <img width={56} height={56} src={dummyData?.image} />
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Product Name</HeadingXSmall>
        <div className="flex flex-col justify-center mt-2">
          <LabelMedium>{dummyData?.name}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>SKU</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>{dummyData?.sku}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Category</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>{dummyData?.categoryName}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2 max-w-[300px]'>
        <HeadingXSmall>Description</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>{dummyData?.description}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Width</HeadingXSmall>
        <div className="flex items-center mt-2 justify-center">
          <LabelMedium>{dummyData?.width}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Length</HeadingXSmall>
        <div className="flex items-center mt-2 justify-center">
          <LabelMedium>{dummyData?.length}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Height</HeadingXSmall>
        <div className="flex items-center mt-2 justify-center">
          <LabelMedium>{dummyData?.height}</LabelMedium>
        </div>
      </div>
      <div className='border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-b-0 pr-2'>
        <HeadingXSmall>Harga</HeadingXSmall>
        <div className="flex items-center mt-2">
          <LabelMedium>Rp. {dummyData?.harga}</LabelMedium>
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