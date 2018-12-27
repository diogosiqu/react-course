import React from 'react'
import ReactDOM from 'react-dom'

//USADO QUANDO TENHO UM COMPONENTE DEFAULT
import Primeiro, { Segundo } from './component'

//USADO QUANDO DECLARO O EXPORT NO COMPONENTE
//import { Primeiro, Segundo } from './component'

ReactDOM.render(
  // É NECESSÁRIO ENVOLVER OS COMPONENTES EM UM COMPONENTE PAI QUE ESTÁ REPRESENTADO PELA DIV
  <div>
    <Primeiro/>
    <Segundo/>
  </div>
, document.getElementById('app'))


 