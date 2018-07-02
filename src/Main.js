import React from 'react'

import Large8 from './Large8'
import Large4 from './Large4'
import OtherArticles from './OtherArticles';

const Main = () => {
    return (
    <main className="expanded row">
        <Large8 />
    
        <Large4 />

        <OtherArticles />
    </main>
    )
}

export default Main