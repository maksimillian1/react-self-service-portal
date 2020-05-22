import React from 'react';

import Asset from "../cards/Asset";

export default function AssetList({list}) {

    return list.length ?
        list.map(item=> <Asset key={item.sys_id} obj={item}/>)
        : <h3 className="title--empty">No one found</h3>;
}