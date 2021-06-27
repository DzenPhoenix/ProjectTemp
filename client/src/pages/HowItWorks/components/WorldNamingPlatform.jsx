import React from 'react';
import Style from './WorldNamingPlatform.module.sass';

export default function WorldNamingPlatform() {
    return (
        <div className={Style.wrapper}>
            <div>
                <div className={Style.platform}>
                Worlds #1 Naming Platform
            </div>
            <h1>
                How Does Squadhelp Work?
            </h1>
            <p>
                Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.
            </p>
            <button >
                <a href={"https://vimeo.com/368584367"}>
                    <small class="fas fa-play mr-2"></small>
                    Play Video
                </a>
            </button>
            </div>
            <div className={Style.figureContainer}>
                
            </div>
        </div>
    )
}
