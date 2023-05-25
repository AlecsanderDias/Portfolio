import React from 'react'
import SobreMim from '../SobreMim';
import Tecnologias from '../Tecnologias';
import Projetos from '../Projetos';

function Conteudo() {
  return (
    <div className='flex flex-col justify-center items-center my-8 gap-8'>
      { /*
        Apresentação - Foto / olá meu nome é Alecsander e sou desenvolvedor BackEnd
        Sobre Mim - Descrição sobre minha pessoa / Tecnologias que utilizo / Graduação
        Projetos - Descrição com tabela dos projetos que trabalhei  
      */}
      <SobreMim />
      <Tecnologias />
      <Projetos />
      <h2 className='text-5xl text-blue-500 my-4'>Em desenvolvimento!</h2>
    </div>
  )
}

export default Conteudo;