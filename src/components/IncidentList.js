import React from 'react';

import Incident from "./Incident";

export default function IncidentList({list}) {

    return list.length ?
        list.map(item=> <Incident key={item.sys_id} obj={item}/>)
        : <h3 className="title--empty">No one found</h3>;
}