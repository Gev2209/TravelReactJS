import React from "react";
import './main.css'

import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: `The Bora Bora island is one of the most popular islands in The Islands of Tahiti.
    One of nine islands within the Society Islands, Bora Bora was formed over seven million years ago by a volcano.`
    },
    {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Pichu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'Machu Picchu , Ancient fortress city of the Incas in the Andes Mountains, south-central Peru. '
        },
    {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia.'
            },
    {
    id:4,
    imgSrc: img4,
    destTitle: 'Capadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:'Cappadocia, ancient district in east-central Anatolia, situated on the rugged plateau north of the Taurus Mountains, in the centre of present-day Turkey. '
                },
    {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:`Guanajuato, city, capital of Guanajuato estado (state), central Mexico. 
    Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level.`
                    },
    {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:`Cinque Terre, which means Five Lands, comprises the five small coastal villages of Riomaggiore, Manarola, Corniglia, Vernazza and Monterosso located in the Italian region of Liguria. 
    They are listed on the UNESCO World Heritage List.`
                        },
    {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description:`Angkor Wat is an architectural masterpiece and the largest religious monument in the world –
     covering an area four times the size of Vatican City.`
                            },
    {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'INdia',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:'Angkor Wat is an architectural masterpiece and the largest religious monument in the world'
                                },
    {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description:'Bali, the famed Island of the Gods, with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides'
    }
]








const Main = () => {
    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>


            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) => {
                        return (
                            <div key={id} className="singleDestination">

                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle}></img>
                            </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                                <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )        
                    })
                }
            </div>

        </section>
    )
}

export default Main