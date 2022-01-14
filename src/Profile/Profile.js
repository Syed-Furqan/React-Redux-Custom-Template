import './Profile.scss';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton/CustomButton';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__theme'>
                <div className='profile__theme_name'>
                    <div>
                        <p>Syed Furqan Bukhari</p>
                        <p><i className="fas fa-briefcase"></i>CISCO Network Engineer</p>
                    </div>
                    <div>
                        <p><i className="fas fa-map-marker-alt"></i>Srinagar, Jammu and Kashmir</p>
                        <p><i className="fas fa-envelope"></i>syedfurqan2001@gmail.com</p>
                    </div>
                </div>
                <div className='profile__main_image'>
                </div>
            </div>
            <div className='profile__body'>
                <div className='profile__main'>
                    <div className='profile__main_info'>
                        <p className='profile__main_info_header'>About</p>
                        <p className='profile__main_info_body'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut molestiae obcaecati hic natus, 
                        voluptatem sunt minima dolor delectus quasi autem minus? Exercitationem aperiam commodi pariatur 
                        accusamus eligendi maiores voluptate saepe. Ipsum lavantedor innto mante kasore hjsv hwgvw ckwve.
                        </p>
                        <div className='profile__main_following'>
                            <p>Followers: <strong>7654</strong></p>
                            <p>Following: <strong>142</strong></p>
                        </div>
                    </div>
                </div>
                <div className='profile__body_social'>
                        <div className='profile__body_social_header'>
                            <h1>Social Wall</h1>
                            <p><strong>7654</strong> Followers</p>
                        </div>
                        <div className='profile__body__social_set'>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png" 
                                    alt="" 
                                />
                                <p>3047</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/768px-Twitter-logo.svg.png" 
                                    alt="" 
                                />
                                <p>897</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png" 
                                    alt="" 
                                />
                                <p>179</p>
                            </div>
                        </div>
                        <div className='profile__body__social_set'>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/300px-Linkedin.svg.png" 
                                    alt="" 
                                />
                                <p>345</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/81/Stackoverflow_icon.png" 
                                    alt="" 
                                />
                                <p>49</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" 
                                    alt="" 
                                />
                                <p>55</p>
                            </div>
                        </div>
                        <div className='profile__body__social_set'>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GitHub_Mark.png/923px-GitHub_Mark.png" 
                                    alt="" 
                                />
                                <p>837</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Quora_Q_icon_2015.svg/800px-Quora_Q_icon_2015.svg.png" 
                                    alt="" 
                                />
                                <p>129</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" 
                                    alt="" 
                                />
                                <p>76</p>
                            </div>
                        </div>
                        <div className='profile__body__social_set'>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Font_Awesome_5_brands_behance.svg/150px-Font_Awesome_5_brands_behance.svg.png" 
                                    alt="" 
                                />
                                <p>47</p>
                            </div>
                            <div>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png" 
                                    alt="" 
                                />
                                <p>89</p>
                            </div>
                            <div>
                                <img 
                                    src="https://brandlogos.net/wp-content/uploads/2016/11/dribbble-logo-preview.png" 
                                    alt="" 
                                />
                                <p>97</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile__body_form'>
                        <div className='container'>
                            <h1>Appreciate <i className="far fa-thumbs-up"></i></h1>
                            <CustomInput label='Username' variant='standard' className='input'/>
                            <CustomInput label='Carrots' variant='standard' className='input'/>
                            <p>Balance: <strong>1200</strong></p>
                            <CustomButton title='Pay' className=''/>
                            <p>Not registered?</p>
                            <CustomButton title='Join' className=''/> 
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Profile;