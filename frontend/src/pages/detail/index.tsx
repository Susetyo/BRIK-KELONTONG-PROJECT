import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import { KIND as ButtonKind } from "baseui/button";
import {RootState, AppDispatch} from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {closeModal, openModal} from '../../store/modal/modalSlice';
import {Card, StyledBody} from 'baseui/card';
import {
  LabelMedium
} from 'baseui/typography';
import {deleteItem} from '../../store/items/itemsSlice';
import {OVERRIDES, TModalSelector} from './types'


const Index = () => {
  const modalSelector = useSelector((state:RootState) => state.modal);
  const {modalData, modalName}:TModalSelector = modalSelector;
  const dispatch = useDispatch<AppDispatch>();
  
  const onCancel = () => {
    dispatch(closeModal())
  }

  const onDelete = () => {
    dispatch(deleteItem({id:modalData?.item?.id, items:modalData?.items?.data}))
    dispatch(closeModal())
  }

  const onEdit = () => {
    dispatch(closeModal())
    dispatch(openModal({modalName: 'modalAdd', modalData: { item: modalData?.item, isEdit: true }}))
  }

  return (
    <Modal onClose={onCancel} isOpen={modalName === 'modalDetail'}>
      <ModalBody className='!mt-8'>
        <Card
          overrides={OVERRIDES}
          headerImage={modalData?.item?.image_url}
          title={modalData?.item?.name}
        >
          <StyledBody>
            <LabelMedium>SKU: {modalData?.item?.sku}</LabelMedium>
            <LabelMedium className='mt-2'>Category: Test</LabelMedium>
            <LabelMedium className='mt-2'>Description: {modalData?.item?.description}</LabelMedium>
            <LabelMedium className='mt-2'>Width: {modalData?.item?.width}</LabelMedium>
            <LabelMedium className='mt-2'>Length: {modalData?.item?.length}</LabelMedium>
            <LabelMedium className='mt-2'>Height: {modalData?.item?.height}</LabelMedium>
            <LabelMedium className='mt-2'>Price: Rp. {modalData?.item?.price}</LabelMedium>
          </StyledBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <ModalButton onClick={onDelete} kind={ButtonKind.secondary}>
          Delete
        </ModalButton>
        <ModalButton onClick={onEdit}>Edit</ModalButton>
      </ModalFooter>
    </Modal>
  )
}

export default Index