// https://mui.com/material-ui/material-icons/
import VisibilityIcon from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FaceIcon from '@mui/icons-material/Face';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './FooterMenu.scss';

export const FooterMenu = () => {

    const handleClick = (e) => {
        if (e.target.tagName === "LI" &&  !e.target.classList.contains('active')) {
            Array.from(e.target.parentElement.children).forEach(ch => {
                if(ch.classList.contains('active')){
                    ch.classList.remove('active');
                }
            });
            e.target.classList.add("active");
        }
    }

    return (
        <>
            {/* Section 1 - Notification */}
            <section className="section-notification">
                <ul className="nav" onClick={handleClick}>
                    <li className="active"><HomeIcon /></li>
                    <li><SearchIcon /></li>
                    <li><StarBorderIcon />
                        <ul className="notifications">
                            <li><VisibilityIcon /><span>9</span></li>
                            <li><CommentIcon /><span>4</span></li>
                            <li><AccountCircleIcon /><span>6</span></li>
                        </ul>
                    </li>
                    <li><FaceIcon /></li>
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