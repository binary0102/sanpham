import React, {useState} from 'react';
import {Tab} from './Tab';
import {ListItems} from './ListItems'
export const Tabs = ({children}) => {
  
    const [activiTab, setActiviTab] = useState(children.props.children[0].props.label);

    return (
        <div>
        <ListItems>
            {children.props.children.map(element => {
                 const { label } = element.props;
                return <Tab key={label} onClick={()=> setActiviTab(label)}> {label} </Tab>
            })}
        </ListItems>
        <div>
            {children.props.children.map(element => {
                 if (element.props.label !== activiTab ) return undefined;
                 return  element.props.children;
                
            })}
        </div>
        </div>
    )
}