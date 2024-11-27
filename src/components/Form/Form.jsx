import { useState } from 'react';
import Widget from '../Widget/Widget.jsx';

export default function Form() {
    const [data, setData] = useState([]);
    const onSubmit = (evt) => {
        evt.preventDefault();
        const { target } = evt;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        setData([
            {
                title: data.title,
                worldClock: data.worldClock,
                id: Math.random(),
            },
        ]);
    };
    
    const handleDelete = (evt) => {
        const { target } = evt;
        const parentElement = target.closest('.widget');
        setData((prevState) => {
            return prevState.filter(
                (elem) => elem.id !== Number(parentElement.id),
            );
        });
    };
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <label>
                        {' '}
                        Название
                        <input name="title" />
                    </label>
                    <label>
                        {' '}
                        Временная зона
                        <input name="worldClock" />
                    </label>
                    <button>Добавить</button>
                </fieldset>
            </form>
            <Widget data={data} handleDelete={handleDelete} />
        </>
    );
}
