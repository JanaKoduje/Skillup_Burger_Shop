import React from "react";
import MenuCard from "./MenuCard";
import { burgers } from "../../data";

const Menu = () => {
    const addToCartHandler = (itemNum) => { };

    return (
        <section id="menu">
            <h1>MENU</h1>

            <div>
                {burgers.map((item) => <MenuCard
                    key={item.itemNum}
                    itemNum={item.itemNum}
                    burgerSrc={item.img}
                    price={item.price}
                    title={item.title}
                    delay={item.delay}
                    handler={addToCartHandler}
                />
                )}
            </div>
        </section>
    );
};

export default Menu; 
