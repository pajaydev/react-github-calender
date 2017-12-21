import React, { Component } from 'react';
import componentData from  '../../config/componentData';
import ComponentData from './ComponentData';

class App extends Component{

    render(){
        return(
            <div>
                <h1>React Github Calender</h1>
                <ComponentData component={componentData} />
            </div>
        )
    }

}

export default App;