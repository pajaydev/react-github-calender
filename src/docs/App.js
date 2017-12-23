import React, { Component } from 'react';
import componentData from  '../../config/componentData';
import ComponentData from './ComponentData';
import Header from './Header';
import GithubCorner from 'react-github-corner';

class App extends Component{

    render(){
        return(
            <div>
                <GithubCorner
                    href={""}
                    bannerColor="#151513"
                    octoColor="#fff"
                    size={80}
                    direction="right"
                />
                <Header />
                <ComponentData component={componentData} />
            </div>
        )
    }

}

export default App;