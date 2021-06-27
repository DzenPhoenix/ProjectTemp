import React from 'react';
import Style from './HowItWorks.module.sass';
import Header from '../../components/Header/Header';
import WorldNamingPlatform from './components/WorldNamingPlatform';
import Footer from '../../components/Footer/Footer';


export default function HowItWorks() {
    return (
        <div>
            <Header/>
            <div className={Style.HowDoesSquadHelpWork}>
                <WorldNamingPlatform></WorldNamingPlatform>
            </div>
            <Footer/>
        </div>
    )
}
