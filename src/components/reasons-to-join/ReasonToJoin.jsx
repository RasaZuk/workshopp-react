import style from './ReasonsToJoin.module.css';

export function Reason(params) {
    return (
    
        <div className={style.reason}>
            <h3 className={style.title}>{params.title}</h3>
            <p className={style.description}>{params.description}</p>
            <img src={params.icon} className={style.icon}/>
        </div>

    );
}