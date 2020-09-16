import React from 'react';
import FieldMine from './Field';
import './App.css';


export default function App() {
    alert('Left click - opens a cell. \n Right click - blocks a cell from accidental clicking.');

    return (
        <div className="app">
            <FieldMine></FieldMine>
        </div>);
}
