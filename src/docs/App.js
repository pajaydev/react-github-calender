import React, { Component } from 'react';
import componentData from  '../../config/componentData';
import ComponentData from './ComponentData';
import Header from './Header';

class App extends Component{

    render(){
        return(
            <div>
                <Header />
                <ComponentData component={componentData} />
            </div>
        )
    }

}

export default App;