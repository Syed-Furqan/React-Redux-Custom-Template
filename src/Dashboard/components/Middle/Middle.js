import './Middle.scss';
import Offer from '../../../assets/images/offer_1.jpg';

const Middle = () => {
    const appreciations = [
        'https://previews.123rf.com/images/elvie15veronika/elvie15veronika2005/elvie15veronika200500048/147252382-social-media-avatar-profile-a-woman-woman-with-glasses-office-worker-vector-trendy-minimal-style-ill.jpg',
        'https://hansjoerg.me/img/avatar.png',
        'https://sikharkumarbhuyan.github.io/assets/img/profile.png'
    ];

    return (
        <div className='dashboard__main_middle'>
            <div className='shop'>
                <img src="https://image.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148562565.jpg" alt="" />
            </div>
            <div className='offer'>
                <div>
                    <img src={Offer} alt="" />
                </div>
                <div><p>Place Offer!</p></div>
            </div>
            <div className='activities'>
                <p>Activities</p>
                <div className='container'>
                    {appreciations.map((URL, i) => (
                        <div key={i} className='appreciation'>
                            <div className='left'>
                                <div className='image'>
                                    <img src={URL} alt="" />
                                </div>
                                <div className='content'>
                                    <p>Appreciated By</p>
                                    <p>6 Hrs.ago</p>
                                </div>
                            </div>
                            <div className='right'>
                                <p><i className="fas fa-plus"></i>240</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Middle;