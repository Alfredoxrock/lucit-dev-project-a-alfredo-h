import React from 'react';
import './Home.css';
import Card from '../../components/Cardinfo';
import Myimg from '../../components/Sample';



const Home = () => {

    const tags = {
        
    }

    return(
            <div>
                <nav className="navbar navbar-dark justify-content-center">
                    
                    <a href="https://lyrical-saffron-ef9.notion.site/Guide-6aa77e70032a4d2c9c3f619d8b8fc915" target="_blank" rel="noreferrer">
                        
                          <button type="button" class="btn btn-primary mleft">GUIDE</button>
                    </a>
                    <h1 className="text-dark">Lucit Dev Project A - AlfredoH</h1>
                    <a href="https://lyrical-saffron-ef9.notion.site/Documentation-e80c145306f04cea83fbbbe272f8a942" target="_blank" rel="noreferrer">
                          <button type="button" class="btn btn-primary mright">DOCUMENTATION</button>
                    </a>
                    
                </nav>

                <div className="bg-image">
                    <a href="/billboard">
                        <div className="bg-billboard">
                            <Myimg/>
                        </div>  
                    </a>
                </div>

                <hr></hr>
                
                <div className="text-center card1">
                    <Card/>
                </div>


            </div>


            
        )

}



export default Home;