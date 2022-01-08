import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
                    <Accordion className='transactions__body-container' key={transaction.id}>
                        <AccordionSummary
                        className="transactions__body-details"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <div>
                                <p>
                                    <span>Date: </span>
                                    {format === 'fromNow' ? fromNowUnix(transaction.timestamp) 
                                                        : formatUnixDateTimeSmall(transaction.timestamp)
                                    }
                                </p>
                                <p><span>From: </span>{transaction.from_name}</p>
                                <p><span>To: </span>{transaction.to_name}</p>
                                <p className="points"><span>Points: </span>{transaction.points}</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='more-details'>
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
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>

        </div>
    );
}

export default Transactions;

