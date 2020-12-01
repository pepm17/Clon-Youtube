import React from 'react';
import { Icon, Item } from 'semantic-ui-react';
import { ISideBarItem } from './sideBar.interface';
import './sideBarItem.css';

export const SideBarItem = (props: ISideBarItem) => {
    const highlightClass = props.selected ? 'highlight_menu': null;
    return (
        <Item className={["sidebar_item", highlightClass].join(' ')}>
            <div>
                <span><Icon size="large" name={props.icon} /></span>
                <span>{props.label}</span>
            </div>
        </Item>
    )
}