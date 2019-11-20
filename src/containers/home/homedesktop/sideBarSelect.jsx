import React from 'react';

import { sideTabOptions } from "./constants";

type ISideBarSelect = {
    activeTab: string,
    handleMenuClick: (value: string) => void
}

const SideBarSelect = (props: ISideBarSelect) => {
    return (
        <div className="selectWrapper">
            {
                sideTabOptions.map(item => {
                    const isActive = item.value === props.activeTab;
                    const logo = require(`../../../assets/images/${isActive ? item.imageActive : item.image}`);
                    
                    return (
                        <div
                            key={item.key}
                            className={`buttonChoose ${isActive ? 'active' : ''}`}
                            onClick={props.handleMenuClick.bind({}, item.value)}>
                            <div className="buttonData">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBarSelect;