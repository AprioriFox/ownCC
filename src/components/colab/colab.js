import React from "react";
import { Link } from "react-router-dom";
import './colab.css'
import SuprimeImg from '../../images/colabImages/Supreme.svg'
import ColabImg from '../../images/colabImages/colab.svg';

const Supreme = () =>{
    return(
        <div className="suprime">
            <div className="suprimeText">
                <h3>Suprime</h3>
                <p>Liberty</p>
                <p>5600c</p>
            </div>
            <img src={SuprimeImg} alt='Img' />
        </div>
    )
}


const Colab = () =>{
    return(
        <div className="colab">
            <span className="yellowBack">
                <div className="container">
                    <div className="colabItems">
                        <Supreme />
                        <Supreme />
                        <Supreme />
                    </div>
                    <div className="colabText">
                        <h2>SUPREME & nEW era <b>COLLABARATION</b></h2>
                        <Link to='/catalog' className="button">Открыть каталог</Link>
                    </div>
                    <img src={ColabImg} alt='colabImg' className='bigColabImg'/>
                    <span className="purpleCircle">
                        <span className="innerPurpleCircle"></span>
                    </span>
                </div>
                
            </span>
            
        </div>
    )
}

export default Colab;
