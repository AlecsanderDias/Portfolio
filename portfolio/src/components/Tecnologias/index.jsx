import React from 'react';
import { linguagens, frameworks } from './listaTecnologias.js';

function Tecnologias() {
    return (
        <section id='tecnologias' className='h-2/3 flex flex-col justify-center items-center mx-4 my-4'>
            <h2 className='text-3xl font-bold text-sky-700 mb-4'>Tecnologias</h2>
            <p className='text-xl font-bold text-sky-700'>Linguagens</p>
            <ul className='flex flex-wrap gap-3 my-6'>
                { linguagens.map(item => <li key={item.nomeLinguagem}><img className='w-20' src={item.linkIconeLinguagem} alt={item.nomeLinguagem}/></li>) }
            </ul>
            <p className='text-xl font-bold text-sky-700'>Frameworks</p>
            <ul className='flex flex-wrap gap-3 my-6'>
                { frameworks.map(item => <li key={item.nomeFramework}><img className='w-20' src={item.linkIconeFramework} alt={item.nomeFramework}/></li>) }
            </ul>
        </section>
    )
}

export default Tecnologias;