import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ searchItem, setSearchItem ] = '';

    const onInputChange = ({ target }: any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        searchItem,
        setSearchItem,
        onInputChange,
        onResetForm,
    }
}