/* eslint-disable jsx-a11y/anchor-has-content */

import './Widget.css';

export default function Widget({ data, handleDelete }) {
    return data.map((item) => {
        return (
            <div className="widget" id={item.id}>
                <h2> {item.title} </h2>
                <div className="widget__watch">
                    <a
                        className="widget__delete"
                        href="#0"
                        onClick={handleDelete}
                    ></a>
                </div>
            </div>
        );
    });
}
