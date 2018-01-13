import React, { Component } from 'react';
import componentData from  '../../config/componentData';
import ComponentData from './ComponentData';
import Header from './Header';
import GithubCorner from 'react-github-corner';

class App extends Component{

    render(){
        return(
            <div>

                <Header />
                <ComponentData component={componentData} />
                <GithubCorner
                    href={"https://github.com/ajay2507/react-github-calender"}
                />
            </div>
        )
    }

}

export default App;