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
import {loginUser} from '../../store/login/loginSlice';
import { useNavigate } from "react-router-dom";
import {OVERRIDE_BUTTON, OVERRIDE_CARD} from './constant'

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onClickRegister = () => navigate("/register")

  const formik = useFormik({
    initialValues: {
      userName:'',
      password:''
    },
    onSubmit: values => {
      dispatch(loginUser(values));
      navigate("/")
    },
  });

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={formik.handleSubmit}>
        <Card 
          overrides={OVERRIDE_CARD}
          title="Login"
        >
          <StyledBody>
            <FormControl label={() => "Username"}>
              <Input 
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </FormControl>
            <FormControl label={() => "Password"}>
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
              Login
            </Button>
            <div className="my-4" />
            <Button
              kind="tertiary"
              overrides={OVERRIDE_BUTTON}
              onClick={onClickRegister}
            >
              Register
            </Button>
          </StyledAction>
        </Card>
      </form>
    </div>
  )
}

export default Index