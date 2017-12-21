import React, { Component } from 'react';
import Props from './Props';
import Example from './Example';

class ComponentData extends Component{

    render(){
        const { name, props,examples } = this.props.component;
        return(
            <div>
                <h3>Example { examples.length > 0} </h3>
                {
                    examples.length > 0 ? examples.map(example => <Example key={example.code} example={example} componentName={name} />) :
                        'No Examples exist.'
                }
                <h3>Props</h3>
                {props ?
                    <Props props = {props} /> : 'No props for this component' }
            </div>
        )
    }

}

export default ComponentData;