import React, { Component } from 'react'; 

class AddProject extends Component{

    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }
     static defaultProps ={
         categories:['Web Design','Web Development', 'Mobile Development']
     };
     handleSubmit(e){
         e.preventDefault();
         console.log('form subm9ited',this.refs);
     }
    render() {
        let categoryOptions = this.props.categories.map(category=>{
           return <option key={category} value={category} >{category}</option> 
        })
        return(
            <div> 
                <h3>Add project</h3>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="">Title</label> <br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label htmlFor="">Category</label> <br/>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default AddProject;