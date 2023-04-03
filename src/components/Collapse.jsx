import { useState } from 'react'
import down from '../assets/arrow_down.svg'
import '../styles/css/Collapse.css'

function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <section className='collapse'>
            <div className='collapse-heading'>
                <h2>{title}</h2>
                <button className='btn' onClick={() => setIsOpen(false)}><img src={down}/></button>
            </div>
            <div className='collapse-desc'>
                <p>{content}</p>
            </div>
        </section>
    ) : (
        <section className='collapse'>
            <div className='collapse-heading'>
                <h2>{title}</h2>
                <button className='btn' onClick={() => setIsOpen(true)}><img src={down}/></button>
            </div>
        </section>
    )
}

export default Collapse