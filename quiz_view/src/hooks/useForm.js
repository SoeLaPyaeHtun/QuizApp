import { useState } from 'react'

const useForm = (getFreshModelObject) => {

    const [values , SetValue] = useState(getFreshModelObject());
    const [error, SetError] = useState({});

    const handleInput = e => {
        const { name , value } = e.target;

        SetValue({
            ...values,
            [name] : value
        })
    }

  return {
    values,
    SetValue,
    error,
    SetError,
    handleInput
  }
}

export default useForm