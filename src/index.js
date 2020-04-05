/* const element = document.createElement('h1')
element.innerText = "Hello Platzi Badges"

const container = document.getElementById('app')

container.appendChild(element) */

import React from  'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello Platzi Badges from react!</h1>

// /* const name = 'Mile'
// const sum = ()=> 3+3 */
/* const element = React.createElement(
    'h1',
    {},
    `Hola ${name}`
) */
// const jsx = <h1>Hola soy {null}</h1>

const jsx = (
    <div>
        <h1>Hola soy Daniel</h1>
        <p>Soy ingeniero</p>
    </div>
)
const container = document.getElementById('app')

// ReactDOM.render(que, donde)
ReactDOM.render(jsx, container);