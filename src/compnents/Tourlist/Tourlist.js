import React,{Component} from 'react';
import './Tourlist.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../../tourData';
class Tourlist extends Component{
    state = {
        tour:tourData
    }
    removeTour = id => {
        const UpdatedTour = this.state.tour.filter(tour => tour.id !== id);
        this.setState({tour:UpdatedTour});
    }
    render(){
        const tour = this.state.tour;
        return(
            <section className="tourlist">
               {
                   tour.map(tour => {
                       return (
                           <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                       );
                   })
               }
            </section>
        );
    }
}

export default Tourlist;