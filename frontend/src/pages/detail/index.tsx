import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import { KIND as ButtonKind } from "baseui/button";
import {RootState, AppDispatch} from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {closeModal} from '../../store/modal/modalSlice';
import { TItem } from '../list/types';
import {Card, StyledBody} from 'baseui/card';
import {
  LabelMedium
} from 'baseui/typography';
import {deleteItem} from '../../store/items/itemsSlice';

const OVERRIDES = {
  Root: {style: {width: '100%', border:0}},
  HeaderImage: {
    style: () => ({
     height: '400px',
     width: '100%'
    })
  }
}

const Index = () => {
  const modalSelector = useSelector((state:RootState) => state.modal);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {modalData, modalName}:{modalData:{item:TItem, items:any}, modalName:string} = modalSelector;
  const dispatch = useDispatch<AppDispatch>();
  
  const onCancel = () => {
    dispatch(closeModal())
  }

  const onDelete = () => {
    dispatch(deleteItem({id:modalData?.item?.id, items:modalData?.items?.data}))
    dispatch(closeModal())
  }

  return (
    <Modal onClose={onCancel} isOpen={modalName === 'modalDetail'}>
      <ModalBody className='!mt-8'>
        <Card
          overrides={OVERRIDES}
          headerImage={modalData?.item?.image}
          title={modalData?.item?.name}
        >
          <StyledBody>
            <LabelMedium>SKU: {modalData?.item?.sku}</LabelMedium>
            <LabelMedium className='mt-2'>Category: Test</LabelMedium>
            <LabelMedium className='mt-2'>Description: {modalData?.item?.description}</LabelMedium>
            <LabelMedium className='mt-2'>Width: {modalData?.item?.width}</LabelMedium>
            <LabelMedium className='mt-2'>Length: {modalData?.item?.length}</LabelMedium>
            <LabelMedium className='mt-2'>Height: {modalData?.item?.height}</LabelMedium>
            <LabelMedium className='mt-2'>Price: {modalData?.item?.harga}</LabelMedium>
          </StyledBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <ModalButton onClick={onDelete} kind={ButtonKind.secondary}>
          Delete
        </ModalButton>
        <ModalButton>Edit</ModalButton>
      </ModalFooter>
    </Modal>
  )
}

export default Index