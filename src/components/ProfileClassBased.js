import React from "react";

class Profile extends React.Component {
    constructor() {
        super()
        console.log("constructor")
        this.state = {
            login : '',
            id : null,
            img_url : '',
            count : 0,
            count1 : 0
        }
    }

    // componentDidMount() is the best place to make an api call
    // as it is called only once after the initial render
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshay393")
        const jsonData = await data.json()
        this.setState({
            login : jsonData?.login,
            id : jsonData?.id,
            img_url : jsonData?.avatar_url
        })
        console.log("Mount")

        this.timer = setInterval(()=>{
            // console.log("interval")
        },1000)
    }

    // it get called after every render except the initial render
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log("count is updated")
        }
        console.log("update")
    }

    // it is called just before the component is destroyed i.e, we navigate to another page
    // it is like ngOnDestroy in Angular
    // it is useful for performance optimization and memory leakage
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log("render class based component")
        const {count, count1} = this.state
        return (
            <div>
                <h1>Profile Class Based Component</h1>
                <h3>Name : {this.props.name}</h3>
                <h3>Id : {this.props.id}</h3>
                <h3>Count : {count}</h3>
                <h3>Count1 : {count1}</h3>
                <button onClick={()=>{
                    this.setState(
                        {
                            count : 1,
                            count1 : 1
                        }
                    )
                }}>Count</button>
                <h3>Username : {this.state.login}</h3>
                <h3>Id : {this.state.id}</h3>
                <img src={this.state.img_url}></img>
            </div>
        )
    }
}

export default Profile;