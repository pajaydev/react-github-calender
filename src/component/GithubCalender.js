import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GithubCalender.css';
class GithubCalender extends Component{




    createGithubCalender(body){
        console.log("inside github calender");
        let div = document.createElement("div");
        div.innerHTML = body;
        let cal = div.querySelector(".js-contribution-graph");
        let hyperlink = "<a href='http://github.com/'+this.props.username>"+this.props.username+"</a>";
        cal.querySelector(".float-left.text-gray").innerHTML = this.props.text || "Contributed by "+hyperlink;
        document.getElementById('react-github-id').innerHTML = cal.innerHTML;

    }



    componentDidMount(){
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
            <div className="github-calendar" id="react-github-id"></div>
        )
    }

}

export default GithubCalender;