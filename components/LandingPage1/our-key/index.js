import React, { useEffect } from 'react';
import { index } from '../../../config/plugins';

import TitleSection from '../../qloud/titlesection'

var sectionStyle = {
    backgroundImage: `url(${'../../../static/assets/images/others/07.jpg'})`
};
const Index = props => {
    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <section className="wow fadeInUp iq-application" style={sectionStyle} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <TitleSection
                                className='text-center iq-title-box-1'
                                title='Your Applications'
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            />
                            <div className="iq-btn-container">
                                <a className="iq-button iq-btn-round iq-btn-outline d-inline" href="#">View Benchmarks </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Index