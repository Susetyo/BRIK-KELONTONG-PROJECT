import Card from './components/Card';
import { Pagination } from "baseui/pagination";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {getItems} from '../../store/items/itemsSlice';
import { TItem } from './types';


function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const calculatedHeight = window.innerHeight * 0.86;
  const itemsdata = useSelector((state:RootState) => state.items.data)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() =>{
    dispatch(getItems())
  },[dispatch])
 
 
 
  return (
    <>
    <div className='mx-4 my-4 overflow-y-auto' style={{
      height:calculatedHeight
    }}>
      {itemsdata?.items && itemsdata?.items?.map((item:TItem) =>(
        <>
          <Card item={item} />
          <div className='my-2' />
        </>
      ))}
    </div>
        <div className='w-full flex justify-center'>
        <Pagination
          numPages={20}
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(
              Math.min(Math.max(nextPage, 1), 20)
            );
          }}
        />
      </div>
    </>
  )
}

export default Index