import './Dashboard.scss';
import Header from './components/Header/Header';
import Middle from './components/Middle/Middle';
import Footer from './components/Footer/Footer';

const Dashboard = () => {

    return (
        <div className='dashboard__main'>
            <Header />
            <Middle />
            <Footer />
        </div>
    );
}

export default Dashboard;