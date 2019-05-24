import React,{Component} from 'react';
import './Tour.scss';
class Tour extends Component{
    state = { 
        showInfo:false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    }
    render(){
        const tour = this.props.tour;
        return (
            <article className="tour">
                <div className="img-container">
                        <img width="200" src={tour.img} alt="" />
                        <span className="close-btn" onClick={() => this.props.removeTour(tour.id)}>
                            <i className="fas fa-window-close" />
                        </span>
                </div>
                <div>
                    <h3>{tour.city}</h3>
                    <h4>{tour.name}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{tour.info}</p>}
                </div>
            </article>
        );
    }
}
export default Tour;