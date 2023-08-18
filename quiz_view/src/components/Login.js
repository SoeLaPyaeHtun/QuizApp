import React from "react";
import { TextField, Button } from "@mui/material";
import useForm from "../hooks/useForm";



const Login = () => {

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

const login = e => {
    e.preventDefault();
    if(validate()){
      console.log(values);
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
