import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length === 0) {
            onSubmitHandler(values);
            setValues(initialValues);
        } else {
            setErrors(validationErrors);
        }
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        errors,
        changeHandler,
        onSubmit,      
        changeValues,  
    };
};