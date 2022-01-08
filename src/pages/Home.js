import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Home.scss'

const Home = () => {
    const history = useHistory();

    return (
        <div className='home'>
            <button className='home__button' onClick={() => history.push('/test')}>Transactions</button>
        </div>
    )
}

export default Home;