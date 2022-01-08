import { CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';
import postRequest from '../utils/postRequest';
import { Paper } from '@material-ui/core';
import './Test.scss';
import Transactions from './Transactions';

const Test = () => {
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDE4NDEzNTIsImlhdCI6MTY0MTU4MjE1Miwic3ViIjoibWFuam9kaHNhcmFuMUBnbWFpbC5jb20ifQ.VVZ7bP0BHl0E3diwHLK_gEIxJjc0iQj6NyFKQ4kff8I';
    const [transactions, setTransactions] = useState([]);

    const [loading, setLoading] = useState(true);

    const handleTransactions = (res) => {
        console.log(res.data.data.transactions);
        setTransactions(res.data.data.transactions);
    }

    useEffect(() => {
        postRequest('/getUserTransactions', '', (res) => handleTransactions(res), access_token, setLoading);
    }, []);

    return (
        <div className='test'>
            {loading ?  <div className='circle'>
                            <h1>Loading Transactions</h1>
                            <CircularProgress size={50} />
                        </div> 
                     :  <Transactions transactions={transactions} setTransactions={setTransactions}/>
            }
        </div>
    );
}

export default Test;