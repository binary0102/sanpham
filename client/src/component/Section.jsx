import React from 'react';
import "../sass/Section.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function Section(props) {
    return (
        <div className="section-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="bread-crumb">
                                <li>
                                    <a itemprop="url" href="/"><span itemprop="title">Trang chủ</span></a>
                                    <span> <FontAwesomeIcon icon={faAngleRight} /></span>
                                </li>
                                <li><strong itemprop="title"> SD Card</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>        
    );
}