import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'India in a delicate phase of its coronavirus battle as cases surge',
                  imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/FD8D/production/_117290946_gettyimages-1231095638.jpg',
                  id: 1,              
                },
                {
                  title: 'Not easy to land the SG pink ball on its seam: Ashwin',
                  imageUrl: 'https://cricketaddictor.com/wp-content/uploads/2021/02/virat.png',
                  id: 2,
                
                },
                {
                  title: 'Indian Army to get 118 unique Swadeshi Arjun Mk-1A tanks, DAC to invest Rs 6,000 crore to boost Atmanirbhar Bharat',
                  imageUrl: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/02/24/919280-arjun-mk-1a-tanks.jpg',
                  id: 3,
                 
                },
                
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} id={id}/>        
                  ))
                }
            </div>
        )
    }
}

export default Directory;