import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GithubCalender extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }

    componentDidMount(){
        console.log("component did mount");
        console.log(this.props);
        //proxy for cors
        let fetchCalendar = () => fetch("https://urlreq.appspot.com/req?method=GET&url=https://github.com/" + this.props.username).then(response => {
            console.log("success");
            return response.text()
        }).then(body => {
           console.log("body"+body);
        }).catch(e => console.error(e));
        fetchCalendar();
    }

    render(){
        return(
            <div>react github calender</div>
        )
    }

}

export default GithubCalender;