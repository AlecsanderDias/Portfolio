import React from 'react'
import Introducao from '../Introducao';

function Conteudo() {
  return (
    <div className='flex flex-col justify-center items-center my-4'>
      { /*
        Apresentação - Foto / olá meu nome é Alecsander e sou desenvolvedor BackEnd
        Sobre Mim - Descrição sobre minha pessoa / Tecnologias que utilizo / Graduação
        Projetos - Descrição com tabela dos projetos que trabalhei  
      */}
      <Introducao />
      <h2 className='text-5xl text-blue-900 my-4'>Em desenvolvimento!</h2>
    </div>
  )
}

export default Conteudo;