/* eslint-disable jsx-a11y/anchor-has-content */

import './Widget.css';

export default function Widget({ data, state, handleDelete }) {
    const date = new Date();
    const ss = state === false ? false : state.split('').slice(1).join('');
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (ss === 3) {
        return
    } else {
        hours = hours + ss;
    }

    const secondsStartDegree = (360 / 60) * seconds;
    const minutesStartDegree = (360 / 60) * minutes + (6 / 60) * seconds;
    const hoursStartDegree = (360 / 12) * hours + (30 / 60) * minutes + (0.5 / 60) * seconds;

    const root = document.documentElement;
    root.style.setProperty('--changeFromSeconds', `${secondsStartDegree}deg`);
    root.style.setProperty('--changeToSeconds', `${secondsStartDegree + 360}deg`);
    root.style.setProperty('--changeFromMinutes', `${minutesStartDegree}deg`);
    root.style.setProperty('--changeToMinutes', `${minutesStartDegree + 360}deg`);
    root.style.setProperty('--changeFromHours', `${hoursStartDegree}deg`);
    root.style.setProperty('--changeToHours', `${hoursStartDegree + 360}deg`);

    console.log(ss);

    return (
        <div className='wrapper'>
            {
                data.map((item) => {
                    return (
                        <div className="widget" id={item.id}>
                            <h2 className="widget__title"> {item.title} </h2>
                            <div className="widget__watch">
                                <a
                                    className="widget__delete"
                                    href="#0"
                                    onClick={handleDelete}
                                ></a>
                                <time className="clock">
                                    <span className="clock__hand clock__hand--hour"></span>
                                    <span className="clock__hand clock__hand--minute"></span>
                                    <span className="clock__hand clock__hand--second"></span>
                                </time>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
