import React, { Component } from 'react';
import Props from './Props';
import Example from './Example';

class ComponentData extends Component{

    render(){
        const { name, props,examples } = this.props.component;
        return(
            <div className="container wrapper">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 className="text-center">Demo { examples.length > 0} </h3></div>
                    <div class="panel-body"> {
                        examples.length > 0 ? examples.map(example => <Example key={example.code} example={example} componentName={name} />) :
                            'No Examples exist.'
                    }</div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading"><h3 className="text-center">Props</h3></div>
                    <div class="panel-body">  {props ?
                        <Props props = {props} /> : 'No props for this component' }</div>
                    </div>
                </div>

        )
    }

}

export default ComponentData;