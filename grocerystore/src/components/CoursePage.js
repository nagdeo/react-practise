import React,{Component} from 'react';
import { connect } from 'react-redux';
import {createCourse} from '../redux/config';

class CoursesPage extends Component{
    constructor(){
        super();
        this.state={
            course:{title:''} 
        };
        this.onTitleChange=this.onTitleChange.bind(this);
        this.onClickSave=this.onClickSave.bind(this);
    }
    onTitleChange(event){
        const course=this.state.course;
        course.title=event.target.value;
        this.setState({course:course});
        
    }
    onClickSave(event){
        this.props.createCourse(this.state.course);
       this.setState({course:{title:''}});
    }
    
    render(){
        return(
            <div align="center">
                <h1> Course List </h1>
                    {this.props.courses.map((course,index)=><div key={index}>{course.title}</div>)}
                    <h2> Add Course </h2>
                    <input type="text" onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                    <input type="submit" value="Save" onClick={this.onClickSave}/>
                    
            </div>
        )}
}
function mapStateToProps(state){
    return{
        courses:state.course
    }
}
function mapDispatchToProps(dispatch){
    return{
        createCourse:course=>dispatch(createCourse(course)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);





