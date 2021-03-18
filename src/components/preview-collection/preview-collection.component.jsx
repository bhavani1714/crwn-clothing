import React from 'react';
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items}) =>
(
<div className='collection-preview'>

<h1 className='title'>{title}</h1>
<div className='preview'>
{
items.filter((currItem,index)=>(index<4)).map(({id,...otherItemProps}) =>(
<CollectionItem key={id}{...otherItemProps}></CollectionItem>
))
}

    
</div>   
</div>

);
export default CollectionPreview;