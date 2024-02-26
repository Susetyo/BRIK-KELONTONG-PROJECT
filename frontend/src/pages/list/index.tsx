import Card from './components/Card';
import { Pagination } from "baseui/pagination";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {getItems} from '../../store/items/itemsSlice';
import ModalDetail from '../detail';
import {Input} from 'baseui/input';
import {Button, KIND, SIZE} from 'baseui/button';
import {Search} from 'baseui/icon';
import { openModal } from '../../store/modal/modalSlice';
import ModalAdd from '../add';
import {OVERRIDE_INPUT, OVERRIDE_BUTTON} from './constant';
import { useNavigate } from 'react-router-dom';
import {
  HeadingMedium,
} from 'baseui/typography';
import {logOut} from '../../store/login/loginSlice';
import { TItem } from '../../commons/types';
import { Spinner } from "baseui/spinner";
import {
  LabelMedium
} from 'baseui/typography';

const Index = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const calculatedHeight = window.innerHeight * 0.65;
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const items = useSelector((state:RootState) => state.items);
  const modal = useSelector((state:RootState) => state.modal);
  const {modalName} = modal
  const userLocalStorage = localStorage.getItem('user');
  const numPages = items?.data?.totalPages ? items?.data?.totalPages : 0;

  const onClickLogout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  useEffect(() => { if(userLocalStorage === null) navigate('/login') },[userLocalStorage, navigate]);
  useEffect(() => { dispatch(getItems({page, search}))},[dispatch,page, search]);
 
  return (
    <div>
      <div className='w-full h-[70px] flex justify-between px-4 py-4 border border-solid border-[#E1E1E1] border-l-0 border-t-0 border-r-0'>
        <HeadingMedium>Product List</HeadingMedium>
        <Button
          overrides={OVERRIDE_BUTTON}
          onClick={onClickLogout}
          kind={KIND.secondary} 
          size={SIZE.compact}>
            Logout
        </Button>
      </div>
      <div className='mx-4 my-4'>
        <div className='w-full justify-between flex my-4'>
          <Input
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            clearable
            overrides={OVERRIDE_INPUT}
            startEnhancer={<Search size={25} />}
            placeholder='Search product name...'
          />
          <Button
            overrides={OVERRIDE_BUTTON}
            onClick={()=> dispatch(openModal({modalData:items, modalName: 'modalAdd'}))}
            kind={KIND.primary} 
            size={SIZE.compact}>
              Add
          </Button>
        </div>
        {items?.isLoading ? (
          <div className='flex items-center justify-center' style={{ height:calculatedHeight }}>
            <div className='flex flex-col justify-center items-center'>
              <Spinner />
              <LabelMedium>Please wait...</LabelMedium>
            </div>
          </div>
        ) : (
          <div className='overflow-y-auto' style={{ height:calculatedHeight }}>
            {items?.data && items?.data?.items?.map((item:TItem) =>(
              <div key={item.id}>
                <Card item={item} />
                <div className='my-2' />
              </div>
            ))}
          </div>
        )}
        <div className='w-full flex justify-center'>
          <Pagination
            numPages={numPages}
            currentPage={currentPage}
            onPageChange={({ nextPage }) => {
              setPage(nextPage);
              setCurrentPage(
                Math.min(Math.max(nextPage, 1), 20)
              );
            }}
          />
        </div>
        {modalName === 'modalDetail' && (<ModalDetail />)}
        {modalName === 'modalAdd' && (<ModalAdd />)}
      </div>
    </div>
  )
}

export default Index