import './Footer.scss';

const Footer = () => {
    const offers = [
        <div className='btn'>
            <button className='btn__accept'>Accept</button>
            <button className='btn__reject'>Reject</button>
        </div>,
        <p className='accepted'>Accepted</p>,
        <p className='rejected'>Rejected</p>
    ];

    return (
        <div className='dashboard__main_footer'>
            <div className='header'>
                <p className='left'>Offers</p>
                <div className='right'>
                    <p>Recieved</p>
                    <p>Made</p>
                </div>
            </div>
            <div className='main'>
                <div className='main__header'>
                    <p className='title'>Title</p>
                    <p className='details'>Details</p>
                    <p className='email'>Enquiry Email</p>
                    <p className='deadline'>Deadline</p>
                </div>
                <div className='main__body'>
                    {offers.map((offer, i) => (
                        <div key={i} className='main__body_offer'>
                            <p className='title'>Website</p>
                            <div className='details'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores labf.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores labf.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores labf.</p>
                            </div>
                            <p className='email'>johnnyblaze@gmail.com</p>
                            <div className='deadline'>
                                <div className='left'>
                                    <p>15 Jan, 2020</p>
                                    <p>9:30 pm</p>
                                </div>
                                <div className='right'>
                                    {offer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;