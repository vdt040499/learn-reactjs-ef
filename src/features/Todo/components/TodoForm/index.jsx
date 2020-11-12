import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputField from '../../../../components/form-controls/InputField';

const schema = yup.object().shape({
    title: yup.string()
        .required('Please enter title')
        .min(5, 'Title is too short'),
});

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log('TODO FORM', values);
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };

    return (
        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form}/>
            </form>
        </div>
    );
}

export default TodoForm;