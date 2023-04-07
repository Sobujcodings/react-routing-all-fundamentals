import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Text from '../Text/Text';

// home ta  amdr root folder

const Home = () => {

    // loading spinner using useNavigation hook
    const navigation = useNavigation ();

    return (
        <div>
            <Header></Header>
            {/* header is fixed here, home children will be set under it outlet */}
            <div>{navigation.state === 'loading'? 'loading...': "" }</div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Home;