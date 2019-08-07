import React from 'react';
import 'styled-components/macro';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
    return (
        <div css="
            display: grid;
            grid-template-columns: 200px 800px;
            grid-template-rows: 2fr 6fr;
            grid-template-areas:
                'picture header'
                'sidebar body'
            ;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
        ">
            <Header />
            <Sidebar />
        </div>
    );
}

export default App;
