import React from "react";
import MenuCard from "./MenuCard";
import { burgers } from "../../data";

const Menu = () => {
    const addToCartHandler = (itemNum) => { };

    return (
        <section id="menu">
            <h1>MENU</h1>

            <div>
                {burgers.map(({itemNum, img, price, title, delay}) => <MenuCard
                    key={itemNum}
                    itemNum={itemNum}
                    burgerSrc={img}
                    price={price}
                    title={title}
                    delay={delay}
                    handler={addToCartHandler}
                />
                )}
            </div>
        </section>
    );
};

export default Menu; 
