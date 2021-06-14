import * as React from 'react';
import { ContentBox } from './contentBox';
import { Description } from './description';
import { MediaComponent } from './mediaComponent';
import { Title } from './title';

const  Home = () =>{
    return(
        <>
            <ContentBox/>
            <MediaComponent/>
        </>
    );
}
export default Home;