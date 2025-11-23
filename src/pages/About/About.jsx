import React from 'react'
import onas1 from "../../Image/onas1.svg";
import onas2 from "../../Image/onas2.svg";
import onas3 from "../../Image/onas3.png";
import "./About.css";
function About() {
	return (
		<div id='about'>
			 <div className="about">
    <h1>О нас</h1>
    <div className="ab">
        <p>Сегодня «Домашняя гостиница» — одна из крупнейших в Пермском крае гостиничных сетей, динамично расширяющая географический охват и повышающая качество сервиса.</p>

        <div className="img">
            <img src={onas1} alt="" className="mama"/>
           <div className="lulu">
             <span className="nuna1">40+</span>
            <span className="nuna2">Клиентов</span>
           </div>
        </div>

        <div className="img">
            <img src={onas2} alt="" className="mama"/>
            <div className="lulu">
                <span className="nuna1">100+</span>
            <span className="nuna2">Отзывы</span>
            </div>
        </div>

        <div className="img">
            <img src={onas3} alt="" className="mama"/>
           <div className="lulu">
             <span className="nuna1">9</span>
            <span className="nuna2">Квартир</span>
           </div>
        </div>
    </div>
</div>
		</div>
	)
}

export default About
