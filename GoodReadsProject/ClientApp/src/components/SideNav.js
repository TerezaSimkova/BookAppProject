import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Icons
import 'font-awesome/css/font-awesome.min.css';
import {
    faHeart,
    faPlus,
    faInfo,
    faPhone,
    faListDots,
    faClose,
} from '@fortawesome/free-solid-svg-icons'


export function SideNav() {

    const openSideMenu = () => {
        // toggle class on click
        var sideNavBtnClose = document.getElementById("hamburgerMenuSidenNav");
        sideNavBtnClose.classList.toggle('active');

        // add class on click
        var sideMenu = document.getElementById("sideMenuNav");  
        sideMenu.classList.add('open-side-menu');

        var sideNavBtnClose = document.getElementById("sideMenuNavClose");
        sideNavBtnClose.style.display = "flex";
        
        const text = document.getElementsByClassName("side-nav-text");
        for (let i = 0; i < text.length; i++) {
            const t = text[i];
            t.style.display = "flex";
        }
       
        const divs = document.getElementsByClassName("icon");
        for (let i = 0; i < divs.length; i++) {
            const div = divs[i];
            div.classList.add('side-nav-div-items');
        }
        const anch = document.getElementsByClassName("anchor");
        for (let i = 0; i < anch.length; i++) {
            const anchor = anch[i];
            anchor.classList.add('side-nav-link');
        }

    };
    const closeSideMenu = () => {
        var sideMenu = document.getElementById("sideMenuNav");
        sideMenu.classList.remove('open-side-menu');

        var sideNavBtnClose = document.getElementById("sideMenuNavClose");
        sideNavBtnClose.style.display = "none";

        var sideNavBtnClose = document.getElementById("hamburgerMenuSidenNav");
        sideNavBtnClose.classList.remove('active');

        const text = document.getElementsByClassName("side-nav-text");
        for (let i = 0; i < text.length; i++) {
            const t = text[i];
            t.style.display = "none";
        }
    };

    return (
        <div className="side-nav-container">
                <div className="menu-btn"><a onClick={openSideMenu} id="hamburgerMenuSidenNav"><FontAwesomeIcon className="side-nav-heart" icon={faListDots} size="lg" /></a></div>
                <button onClick={closeSideMenu} className="side-nav-close-btn" id="sideMenuNavClose"><FontAwesomeIcon icon={faClose} size="lg" /></button>
            <div className="side-nav-menu" id="sideMenuNav">
                <div className="icon">
                    <a className="anchor" href="#">
                        <FontAwesomeIcon className="side-nav-heart" icon={faPlus} size="lg" />
                    </a>
                    <div className="side-nav-text">Add</div>
                </div>
                <div className="icon">
                    <a className="anchor" href="#">
                        <FontAwesomeIcon className="side-nav-heart" icon={faHeart} size="lg" />
                    </a>
                    <div className="side-nav-text">My List</div>
                </div>
                <div className="icon">
                    <a className="anchor" href="#">
                        <FontAwesomeIcon className="side-nav-heart" icon={faInfo} size="lg" />
                    </a>
                    <div className="side-nav-text">Contact</div>
                </div>
                <div className="icon">
                    <a className="anchor" href="#">
                        <FontAwesomeIcon className="side-nav-heart" icon={faPhone} size="lg" />
                    </a>
                    <div className="side-nav-text">Info</div>
                </div>
            </div>
        </div>
    );

}

