import React, { useState } from 'react';
import { 
    Form,
    Icon,
    Input,
    Item,
    Menu
} from 'semantic-ui-react'
import './topNav.css';

export const TopNav = () => {
    const[searchInputState, setSearchInputState] = useState("");
    
    const onSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        let value: string = event.currentTarget.value;
        setSearchInputState(()=>value);
    }

    return (
        <Menu borderless fixed="top" className="top_nav">
            <Item className="top_nav_icon">
                <span><Icon size="large" name="youtube" /></span>
                <span>YoutubeClon</span>
            </Item>
            <Menu.Menu className="top_nav_container">
                <Item className="search_input">
                    <Form>
                        <Form.Field>
                            <Input
                                placeholder="Search"
                                value={searchInputState}
                                action={{icon: "search"}}
                                onChange={onSearchChange}
                            />
                        </Form.Field>
                    </Form>
                </Item>
            </Menu.Menu>
            <Menu.Menu>
                <Item><Icon className="menu_icon" name="video camera" size="large"/></Item>
                <Item><Icon className="menu_icon" name="grid layout" size="large"/></Item>
                <Item><Icon className="menu_icon" name="ellipsis vertical" size="large"/></Item>
            </Menu.Menu>
        </Menu>
    )
}