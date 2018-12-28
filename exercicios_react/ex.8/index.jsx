import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'


ReactDOM.render(  
  <Family> 
    <Member name='Diogo' lastName='Siqueira'/>  
  </Family> 

, document.getElementById('app'))


 