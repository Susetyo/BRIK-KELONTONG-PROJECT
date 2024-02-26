import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch} from '../../store/store';
import {registerUser} from '../../store/login/loginSlice';
import { useNavigate } from "react-router-dom";
import {OVERRIDE_BUTTON, OVERRIDE_CARD} from '../login/constant';
import { useEffect } from "react";
import * as Yup from 'yup';

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userLocalStorage = localStorage.getItem('user');
  const onClickBack = () => navigate("/login")

  const formik = useFormik({
    initialValues: {
      userName:'',
      password:'',
      fullName: ''
    },
    validationSchema:Yup.object({
      userName: Yup.string().required('User Name is a required field'),
      password: Yup.string().required('Password is a required field'),
      fullName: Yup.string()
    }),
    onSubmit: values => { dispatch(registerUser(values))},
  });

  useEffect(() => { if(userLocalStorage) navigate('/') },[userLocalStorage, navigate])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={formik.handleSubmit}>
        <Card 
          overrides={OVERRIDE_CARD}
          title="Register"
        >
          <StyledBody>
            <FormControl label="Full Name" error={formik.errors.fullName}>
              <Input 
                id="fullName"
                name="fullName"
                type="text" 
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
            </FormControl>
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
            <Button
              overrides={OVERRIDE_BUTTON}
              type="submit"
            >
              Submit
            </Button>
            <div className="my-4" />
            <Button
              kind="tertiary"
              overrides={OVERRIDE_BUTTON}
              onClick={onClickBack}
            >
              Back
            </Button>
          </StyledAction>
        </Card>
      </form>
    </div>
  )
}

export default Index