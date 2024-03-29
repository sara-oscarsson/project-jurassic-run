import * as React from 'react';
import { ContentBox } from './contentBox';
import { Description } from './description';
import { Title } from './title';
import FunFact from './funfact';

const  Home = () =>{
    return(
        <div style={ styleHome }>
            <ContentBox/>
            <FunFact/>
        </div>
    );
}
export default Home;

const styleHome: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}