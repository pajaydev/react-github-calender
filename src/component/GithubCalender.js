import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GithubCalender.css';

class GithubCalender extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            data: ''
        }
    }


    createGithubCalender(body){
        console.log("inside github calender");
        let div = document.createElement("div");
        div.innerHTML = body;
        let cal = div.querySelector(".js-contribution-graph");
        cal.querySelector(".float-left.text-gray").innerHTML = "Ajay kumar";
        /*this.setState({
            data: cal.innerHTML
        })*/
        document.getElementById('react-github-id').innerHTML = cal.innerHTML;

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
           this.createGithubCalender(body);
        }).catch(e => console.error(e));
        fetchCalendar();
    }

    render(){
        return(
            <div id="react-github-id"></div>
        )
    }

}

export default GithubCalender;