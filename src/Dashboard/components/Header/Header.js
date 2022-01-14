import './Header.scss';

const Header = () => {
    const carrots = ['Available Carrots','Life Time Appreciation','Life Time carrots redeemed', 'Life Time Carrots redeemed'];

    return (
        <>
            <div className='dashboard__main_header'>
                <div className='left'>
                    <h1>Hello Vivan!</h1>
                    <p>Welcome Back</p>
                </div>
                <div className='right'>
                    <button><i className="fas fa-plus"></i>Buy Carrots</button>
                </div>
            </div>
            <div className='dashboard__main_carrots'>
                {carrots.map((title, i) => (
                    <div key={i} className='carrot'>
                        <p>{title}</p>
                        <p><i className="fas fa-carrot"></i>240</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Header;