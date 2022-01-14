import './Sidebar.scss';
import CustomBadge from '../components/ui/CustomBadge/CustomBadge';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__brand'>
                <p><span>Carrot</span>GAIN</p>
                <p>BidPx</p>
            </div>
            <div className='sidebar__profile'>
                <div>
                    <img 
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                        alt="" 
                    />
                    <p>Furqan</p>
                </div>
                <CustomBadge count={7}/>
            </div>
            <div className='sidebar__links'>
                <button><i className="fas fa-home-lg-alt"></i>Home</button>
                <button style={{color: 'orange'}}><i className="fas fa-gift"></i>Thank Now</button>
                <button><i className="fas fa-shopping-cart"></i>Store</button>
                <button><i className="fas fa-bars"></i>Transactions</button>
            </div>
            <div className='sidebar__links_bottom'>
                <p className><i className="fas fa-qrcode"></i>Scan QR</p>
                <div>
                    <p>Invite and Earn</p>
                    <div>
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
                <p><i className="fas fa-sign-out"></i>Log Out</p>
            </div>
        </div>
    );
}

export default Sidebar;