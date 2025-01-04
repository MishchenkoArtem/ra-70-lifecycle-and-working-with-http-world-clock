import './Form.css';

import { useState } from 'react';
import Widget from '../Widget/Widget.jsx';

export default function Form() {
    const [form, setForm] = useState([]);
    const [state, setState] = useState(false);
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        const { target } = evt;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        if (data.date === '' || data.worldClock === '') return;
        setForm([
            {
                title: data.title,
                worldClock: data.worldClock,
                id: Math.random(),
            },
            ...form
        ]);

        setState(target.worldClock.value);

        target.title.value = '';
        target.worldClock.value = '';
    };
    
    // --- Удаление элемента из состояния
    const handleDelete = (evt) => {
        const { target } = evt;
        const parentElement = target.closest('.widget');
        setForm((prevState) => {
            return prevState.filter(
                (elem) => elem.id !== Number(parentElement.id),
            );
        });
    };

    return (
        <>
            <form className='form' onSubmit={onSubmit}>
                <fieldset className="form__fieldset">
                    <label className='form__label'>
                        {' '}
                        Название
                        <input className='form__input' name="title" />
                    </label>
                    <label className='form__label'>
                        {' '}
                        Временная зона
                        <input className='form__input' name="worldClock" />
                    </label>
                    <button>Добавить</button>
                </fieldset>
            </form>
            <Widget data={form} state={state} handleDelete={handleDelete} />
        </>
    );
}
