import React from 'react';

import Request from "../cards/Request";

export default function RequestList({list}) {

    return list.length ?
        list.map(item=> <Request key={item.sys_id} obj={item}/>)
        : <h3 className="title--empty">No one found</h3>;
}