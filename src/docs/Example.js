import React from 'react';
import PropTypes from 'prop-types';
import CodeRefractor from './CodeRefractor';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCode: false
        };
    }

    toggleCode(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {showCode: !prevState.showCode};
        });
    }

    render() {
        const {name, code, description} = this.props.example;
        const {showCode} = this.state;
        const ExampleComponent = require(`./example/${name}`).default;
        return (
            <div className="example-wrapper">
                <p>
                    {description}
                </p>

                <ExampleComponent />
                <a href="#" onClick={this.toggleCode.bind(this)}>
                    {showCode ? "Hide" : "Show"} Code</a>
                {showCode && <CodeRefractor>{code}</CodeRefractor>}
            </div>
        )
    }
}

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired
}

export default Example;