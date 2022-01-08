import { formatUnixDateTimeSmall, fromNowUnix} from '../middlewares/moment';
import { useState } from 'react';
import './Transactions.scss';
import { useEffect } from 'react';

const Transactions = ({transactions, setTransactions}) => {
    const [key, setKey] = useState('sortBy');
    const [format, setFormat] = useState('exact');

    useEffect(() => {
        setTransactions([...transactions].sort((a, b) => (a[key] < b[key] ? 1 : -1)));
    }, [key, format]);

    // document.querySelectorAll('.transactions__body-container').forEach((el, i) => {
    //     el.addEventListener('click', () => {
    //         document.getElementById(`detail${i}`).classList.add('more-details-display');
    //     });
    // });

    return (
        <div elevation={10} className="transactions">
            <div className="transactions__header">
                <h1>Transactions</h1>
                <div>
                    <select className='filter' onChange={(e) => setFormat(e.target.value)}>
                        <option value="exact">Exact Date</option>
                        <option value="fromNow">Relative Date</option>
                    </select>
                    <select className='filter' onChange={(e) => setKey(e.target.value)}>
                        <option value="sortBy">Sort By</option>
                        <option value="points">Points</option>
                        <option value="from_name">Name</option>
                        <option value="timestamp">Date</option>
                    </select>
                </div>
            </div>
            <div className="transactions__body">
                <div className="transactions__body-info">
                    <p>Date</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Points</p>
                </div>
                {transactions.map((transaction,i) => (
                    <div className='transactions__body-container' key={transaction.id}>
                        <div className="transactions__body-details" >
                            <p>
                                {format === 'fromNow' ? fromNowUnix(transaction.timestamp) 
                                                    : formatUnixDateTimeSmall(transaction.timestamp)
                                }
                            </p>
                            <p>{transaction.from_name}</p>
                            <p>{transaction.to_name}</p>
                            <p className="points">{transaction.points}</p>
                        </div>
                        <div className='more-details' id={`detail${i}`}>
                            <div>
                                <p>From:</p>
                                <p>{transaction?.from}</p>
                            </div>
                            <div>
                                <p>To:</p>
                                <p>{transaction?.to}</p>
                            </div>
                            <div>
                                <p>TID:</p>
                                <p>{transaction?.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Transactions;

