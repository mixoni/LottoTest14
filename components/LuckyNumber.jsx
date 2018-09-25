var React = require("react");
var ReactDOM = require("react-dom");

class LuckyNumber extends React.Component { 
    constructor(props){
        super(props);
        this.state = { component : <div><input type="hidden" value="" className={this.props.inputClassName} /></div> }
    }
    
    componentDidMount(){
        if(this.props.luckyNumberValue && this.props.luckyNumberValue != 0 && !this.props.animation)
        {
            let color = this.handleColor(this.props.luckyNumberValue);
            let $class =  "ball-selected ball-selected-" + color;
            this.setState({ component:  
                        <div className={$class}>
                            <div className='ball-inner-circle'>
                                <div className='ball-circle-number'>
                                    <span>{ this.props.luckyNumberValue }</span>
                                </div>
                            </div>
                        </div> 
            });
        }
    }
    
    handleColor = ($value) => {
        let color = "red";
                
        if($value >= 1 && $value < 10)
            color = "blue";
        if($value >= 10 && $value < 20)
            color = "purple";
        if($value >= 20 && $value < 30)
            color = "lightpurple";
        if($value >= 30 && $value < 40)
            color = "green";
        if($value >= 40 && $value < 50)
                color = "lightgreen";
        if($value >= 50 && $value < 60)
                color = "gold";
        if($value >= 60 && $value < 70)
                color = "yellow";
    
        return color;
    }

    render() {
        return(
            <div> {this.state.component} </div> 
        )     
}

module.exports = LuckyNumber;