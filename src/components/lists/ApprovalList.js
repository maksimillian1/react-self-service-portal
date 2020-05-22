import React from 'react';

import Approval from "../cards/Approval";

export default function ApprovalList({list}) {

    return list.length ?
        list.map(item=> <Approval key={item.sys_id} obj={item}/>)
        : <h3 className="title--empty">No one found</h3>;
}