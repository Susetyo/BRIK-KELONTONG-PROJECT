import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState} from '../../store/store';
import {loginUser} from '../../store/login/loginSlice';
import { useNavigate } from "react-router-dom";
import {OVERRIDE_BUTTON, OVERRIDE_CARD} from './constant';
import { toaster,ToasterContainer } from "baseui/toast";
import * as Yup from 'yup';
import { useEffect } from "react";

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userSelector = useSelector((state:RootState) => state.user);
  const { error } = userSelector;
  const userLocalStorage = localStorage.getItem('user');

  const formik = useFormik({
    initialValues: {
      userName:'',
      password:''
    },
    validationSchema:Yup.object({
      userName: Yup.string().required('User Name is a required field'),
      password: Yup.string().required('Password is a required field')
    }),
    onSubmit: values => dispatch(loginUser(values)),
  });

  const onClickRegister = () => navigate("/register");

  useEffect(() => { if(error !== null) toaster.negative(error, {}) },[error])
  useEffect(() => { if(userLocalStorage) navigate('/') },[userLocalStorage, navigate])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={formik.handleSubmit}>
        <Card overrides={OVERRIDE_CARD} title="Login">
          <StyledBody>
            <FormControl label="Username" error={formik.errors.userName}>
              <Input 
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </FormControl>
            <FormControl label="Password" error={formik.errors.password}>
              <Input 
                id="password"
                name="password"
                type="password" 
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
          </StyledBody>
          <StyledAction>
            <Button overrides={OVERRIDE_BUTTON} type="submit">
              Login
            </Button>
            <div className="my-4" />
            <Button kind="tertiary" overrides={OVERRIDE_BUTTON} onClick={onClickRegister}>
              Register
            </Button>
          </StyledAction>
        </Card>
      </form>
      <ToasterContainer />
    </div>
  )
}

export default Index