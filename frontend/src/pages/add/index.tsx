import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
  ModalHeader
} from 'baseui/modal';
import { KIND as ButtonKind } from "baseui/button";
import {RootState, AppDispatch} from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {closeModal} from '../../store/modal/modalSlice';
import { TItem } from '../../commons/types';
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import {addItem} from '../../store/items/itemsSlice';
import { Textarea } from "baseui/textarea";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import {getCategories} from "../../store/categories/categoriesSlice";
import { useEffect, useState, useMemo } from 'react';
import { Select } from "baseui/select";
import * as Yup from 'yup';

type TModalSelector = {   
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalData: { item:TItem, items:any }, 
  modalName:string
}

export type TCategory = {
  id: number, 
  categoryName: string, 
}

const Index = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [categoryId, setCategoryId] = useState<any>([]);
  const modalSelector = useSelector((state:RootState) => state.modal);
  const {modalName, modalData}:TModalSelector = modalSelector;
  const categorySelector = useSelector((state:RootState) => state.categories);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCancel = () => {
    dispatch(closeModal())
  }

  const options = useMemo(() => {
    return categorySelector?.data?.map((category:TCategory) => ({id:category?.id, label:category?.categoryName}))
  },[categorySelector]);

  useEffect(() =>{
    dispatch(getCategories());
  },[dispatch]);

  const formik = useFormik({
    initialValues: {
      sku: "",
      name:"", 
      description:"",
      weight: 0, 
      width: 0, 
      length: 0, 
      height: 0, 
      image_url: "", 
      price:0
    },
    validationSchema:Yup.object({
      sku: Yup.string().required('Sku is a required field'),
      name: Yup.string().required('Name is a required field'),
      description: Yup.string().required('Description is a required field'),
      weight: Yup.number().min(1).required('Weight is a required field'),
      width: Yup.number().min(1).required('Width is a required field'),
      length: Yup.number().min(1).required('Length is a required field'),
      height: Yup.number().min(1).required('Height is a required field'),
      image_url: Yup.string().required('Image is a required field'),
      price: Yup.number().min(1).required('Price is a required field')
    }),
    onSubmit: values => {
      if(categoryId.length > 0){
        dispatch(addItem({sendData:{...values, categoryId:categoryId[0]?.id},items:modalData}))
        dispatch(closeModal())
        navigate(0)
      }
    },
  });

  return (
    <Modal onClose={onCancel} isOpen={modalName === 'modalAdd'}>
      <ModalHeader>Add Item</ModalHeader>
      <form onSubmit={formik.handleSubmit}>
        <ModalBody>
          <FormControl label="Product Name" error={formik.errors.name}>
            <Input 
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormControl>
          <FormControl label="SKU" error={formik.errors.sku}>
            <Input 
              id="sku"
              name="sku"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.sku}
            />
          </FormControl>
          <FormControl label="Category">
            <Select
              id="categoryId"
              options={options}
              value={categoryId}
              placeholder="Select category"
              onChange={params => setCategoryId(params?.value)}
            />
          </FormControl>
          <FormControl label="Description" error={formik.errors.description}>
            <Textarea 
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </FormControl>
          <FormControl label="Weight" error={formik.errors.weight}>
            <Input 
              min={0}
              id="weight"
              name="weight"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.weight}
            />
          </FormControl>
          <FormControl label="Width" error={formik.errors.width}>
            <Input 
              min={0}
              id="width"
              name="width"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.width}
            />
          </FormControl>
          <FormControl label="Height" error={formik.errors.height}>
            <Input 
              min={0}
              id="height"
              name="height"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.height}              
            />
          </FormControl>
          <FormControl label="Length" error={formik.errors.length}>
            <Input
              min={0}
              id="length"
              name="length"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.length}                            
            />
          </FormControl>
          <FormControl label="Image URl" error={formik.errors.image_url}>
            <Input 
              id="image_url"
              name="image_url"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.image_url}                                          
            />
          </FormControl>
          <FormControl label="Price" error={formik.errors.price}>
            <Input
              min={0}
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}                                                    
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <ModalButton  kind={ButtonKind.secondary}>
            Close
          </ModalButton>
          <ModalButton type="submit">Sumbit</ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default Index