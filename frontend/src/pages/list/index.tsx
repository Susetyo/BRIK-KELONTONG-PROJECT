import Card from './components/Card';
import { Pagination } from "baseui/pagination";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {getItems} from '../../store/items/itemsSlice';
import { TItem } from './types';
import ModalDetail from '../detail';
import {Input} from 'baseui/input';
import {Button, KIND, SIZE} from 'baseui/button';
import {Search} from 'baseui/icon';
import { openModal } from '../../store/modal/modalSlice';
import ModalAdd from '../add'

function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('Clear me!');
  const calculatedHeight = window.innerHeight * 0.75;
  const {modal,items} = useSelector((state:RootState) => state);
  const {modalName} = modal
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() =>{
    dispatch(getItems())
  },[dispatch])
 
  return (
    <div className='mx-4 my-4'>
      <div className='w-full justify-between flex my-4'>
        <Input
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          clearable
          overrides={{
            Root: {
              style: () => ({
                width: '200px'
              })
            }
          }}
          startEnhancer={<Search size={25} />}
        />
        <Button
          onClick={()=> dispatch(openModal({modalData:items, modalName: 'modalAdd'}))}
          kind={KIND.primary} 
          size={SIZE.compact}>
            Add
        </Button>
      </div>
      <div className='overflow-y-auto' style={{
        height:calculatedHeight
      }}>
        {items?.data && items?.data?.items?.map((item:TItem) =>(
          <div key={item.id}>
            <Card item={item} />
            <div className='my-2' />
          </div>
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
      {modalName === 'modalDetail' && (<ModalDetail />)}
      {modalName === 'modalAdd' && (<ModalAdd />)}
    </div>
  )
}

export default Index