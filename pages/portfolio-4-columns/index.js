import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';
import PortfoiloFour from '../../components/portfolio/portfolio4columns'
import TopBanner from '../../components/qloud/topbanner'
import logoImg from '../../static/assets/images/logo.png'

const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main"} logoImg={logoImg}>
                <TopBanner title="Portfolio Four" />
                <PortfoiloFour />
            </Layout>
        </>
    );
}

export default Index;
