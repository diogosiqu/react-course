import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'


ReactDOM.render(  
  <Family lastName='Siqueira'>  
    <Member name='Diogo'/>  
    <Member name='Ana Clara'/>  
    <Member name='Amanda'/>  
  </Family> 

, document.getElementById('app'))


 