// https://mui.com/material-ui/material-icons/
import VisibilityIcon from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FaceIcon from '@mui/icons-material/Face';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useState } from 'react';
import './FooterMenu.scss';

export const FooterMenu = () => {

    const [active, setActive] = useState('0');

    const handleClick = (e) => {
        setActive(e.target.dataset.index)
     }

    return (
        <>
            {/* Section 1 - Notification */}
            <section className="section-notification">
                <ul className="nav" onClick={ handleClick}>
                    <li className={active === '0' ? "active" : ""} data-index={'0'}><HomeIcon /></li>
                    <li className={active === '1' ? "active" : ""} data-index={'1'}><SearchIcon /></li>
                    <li className={active === '2' ? "active" : ""} data-index={'2'}><StarBorderIcon />
                        <ul className="notifications">
                            <li><VisibilityIcon /><span>9</span></li>
                            <li><CommentIcon /><span>4</span></li>
                            <li><AccountCircleIcon /><span>6</span></li>
                        </ul>
                    </li>
                    <li className={active === '3' ? "active" : ""} data-index={'3'}><FaceIcon /></li>
                </ul>
            </section>
            {/* Section 2 - Alert */}
            <section className="section-alert">
                <div className="website">
                    <div className="title-block">
                        <div className="title"><i className="material-icons site-icon">face</i>
                            {/* <!--span Obviously a website--><span>Many faces of murray</span> */}
                            <hr />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="alert-element">
                        <div className="icon"><NotificationsIcon /></div>
                        <div className="text"><span>You clicked a Murray!!</span></div>
                    </div>
                </div>
            </section>
            {/* Section 3 - Modal */}
            <section className="section-modal">
                <div className="profile"><img src="" alt="img" />
                    <div className="text">
                        <div className="name">Bill Murray</div>
                        <div className="meta">Click me!</div>
                    </div>
                </div>
                <div className="overlay">
                    <div className="modal">
                        <div className="title">You clicked a Murray!</div>
                        <div className="body">
                            <div className="img" style={{ backgroundImage: `url('')` }}></div>
                            <div className="text">
                                <p>Bill Murray loves you, and sends his most sincere regards.</p>
                                <p>He also asks that you simply keep on hacking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}