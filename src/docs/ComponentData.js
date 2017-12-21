import React, { Component } from 'react';


class ComponentData extends Component{

    render(){
        const { name, props } = this.props.component;
        return(
            <div>
                Component data testing...
            </div>
        )
    }

}

export default ComponentData;