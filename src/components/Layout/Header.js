import {Fragment} from "react";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>Amna Rasoi</h1>
                <button>Cart</button>
            </header>
            <div>
                <img />
            </div>
        </Fragment>
    );
};

export default Header;