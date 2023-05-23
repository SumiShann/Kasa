import { useState, useEffect } from 'react'
import down from '../assets/arrow_down.svg'
import '../styles/css/Collapse.css'

function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    const [render, setRender] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setRender(true)
            }, 10)
        } else {
            setRender(false)
        }
    }, [isOpen])

    return isOpen ? (
        <section className='collapse'>
            <div className='collapse-heading'>
                <h2>{title}</h2>
                <button className={`btn ${isOpen ? 'up' : null}`} onClick={() => setIsOpen(false)}>
                    <img src={down}/>
                </button>
            </div>
            <div className={`collapse-desc ${render ? 'shown' : null}`}>
                {Array.isArray(content) ?
                    <ul className='content'>
                        {content.map((item, index) =>
                            <li key={`${item}-${index}`}>{item}</li>)}
                    </ul> : 
                    <p className='content'>{content}</p>
                }
            </div>
        </section>
    ) : (
        <section className='collapse'>
            <div className='collapse-heading'>
                <h2>{title}</h2>
                <button className={`btn ${isOpen ? 'up' : null}`} onClick={() => setIsOpen(true)}>
                    <img src={down}/>
                </button>
            </div>
        </section>
    )
}

export default Collapse