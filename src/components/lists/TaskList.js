import React from 'react';

import Task from "../cards/Task";

export default function TaskList({list}) {

    return list.length ?
        list.map(item=> <Task key={item.sys_id} obj={item}/>)
        : <h3 className="title--empty">No one found</h3>;
}