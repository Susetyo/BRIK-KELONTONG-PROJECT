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
  const {modalData, modalName}:{modalData:TItem, modalName:string} = modalSelector;
  const dispatch = useDispatch<AppDispatch>();
  const onCancel = () => {
    dispatch(closeModal())
  }

  return (
    <Modal onClose={onCancel} isOpen={modalName === 'modalDetail'}>
      {/* <ModalHeader></ModalHeader> */}
      <ModalBody className='!mt-8'>
        <Card
          overrides={OVERRIDES}
          headerImage={modalData?.image}
          title={modalData?.name}
        >
          <StyledBody>
            <LabelMedium>SKU: {modalData?.sku}</LabelMedium>
            <LabelMedium className='mt-2'>Category: Test</LabelMedium>
            <LabelMedium className='mt-2'>Description: {modalData?.description}</LabelMedium>
            <LabelMedium className='mt-2'>Width: {modalData?.width}</LabelMedium>
            <LabelMedium className='mt-2'>Length: {modalData?.length}</LabelMedium>
            <LabelMedium className='mt-2'>Height: {modalData?.height}</LabelMedium>
            <LabelMedium className='mt-2'>Price: {modalData?.harga}</LabelMedium>
          </StyledBody>
        </Card>
        <ModalFooter>
          <ModalButton kind={ButtonKind.secondary}>
            Delete
          </ModalButton>
          <ModalButton>Edit</ModalButton>
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}

export default Index