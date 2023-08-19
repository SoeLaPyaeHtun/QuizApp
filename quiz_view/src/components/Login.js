import React from "react";
import { TextField, Button } from "@mui/material";
import useForm from "../hooks/useForm";
import { END_POINT, createAPIendpoint } from "../api";
import useStateContext from "../hooks/useStateContext";
import { useNavigate } from "react-router-dom";



const Login = () => {

  const { context , setContext } = useStateContext();
  

  const getFrestModel = () => ({
    name : ''
  })

const {
  values,
  SetValue,
  error,
  SetError,
  handleInput
} = useForm(getFrestModel);

const navigate = useNavigate();

const login = e => {
    e.preventDefault();
    if(validate()){
      createAPIendpoint(END_POINT.participant)
      .post(values)
      .then(res => {
        setContext({ participantId: res.data.participantId })
        navigate('/question')
      })

      .catch(err => console.log(err))
    }
    
}



const validate = () => {

  const temp = {};
  temp.name = values.name !== '' ? "" : "This Field is Required";

  SetError(temp);
  return Object.values(temp).every(x => x === "")

}
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      {context.participantId}
      <div className="flex flex-col md:w-1/3 md:h-1/3">
        <form noValidate autoComplete="off" onSubmit={login}>
          <div className="flex flex-col p-4 gap-y-6">
            <TextField label="Name" variant="outlined" name="name" value={values.name} onChange={handleInput} 
            {...(error.name && {error: true , helperText:error.name})} />
            <Button variant="outlined" type="submit">Enter</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
