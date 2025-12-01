import type React from 'react';
import './Demo.css'

const grades = [
    {
        id: 1,
        grade: 92
    },
    {
        id: 2,
        grade: 75
    },
    {
        id: 3,
        grade: 56
    }
]

export default function Demo() {

let name = 'Eliad';
let age = 28;
let isMale = true;

// this is function, in TS params have to be defined
function getIsSmoking(username: string): string{
    if (name === username) return 'yes'
    return 'no'
}
// this is component because of tags
function ShowMarkup(){ 
    return <p> this is markup</p>
}
function clickHandler(event: React.MouseEvent<HTMLButtonElement>){
    event.currentTarget;
    alert('I was clicked' )
}

const grades = [92, 75, 56]

    return (
        <div className='Demo'>
            <p>name is {name}</p> 
            <p>age is {age}</p>
            {/* ternary operator */}
            <p>male ? {isMale ? 'yes' : 'no'}</p>
            {/*  ctrl+ / */}
            {/* conditional rendering ctrl+ / */}
            <p>getIsSmoking? {getIsSmoking('Roman')} </p>
            {isMale && <p>he is a man </p>}
            {!isMale && <p>he is a woman </p>}
            <ShowMarkup />
            <ul>
            <p> grades: </p>                  
                {grades.map((g, i) => <li key={i}>{g}</li>)}
            </ul>

            <button onClick={clickHandler}> click me</button>
                           

        </div>
    )
}