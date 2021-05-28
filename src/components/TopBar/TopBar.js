import React, { Component } from 'react';

import './TopBar.css';

class TopBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div id="topBar">
                <div>
                    <b>Cookie Clicker</b>&trade; &copy; 
                    <a href="//orteil.dashnet.org" target="_blank" rel="noreferrer" id="topbarOrteil">Orteil</a>, 
                    2020 - <a href="//dashnet.org" target="_blank" rel="noreferrer" id="topbarDashnet">DashNet</a>
                </div>
                <div>
                    <a href="https://twitter.com/orteil42" target="_blank" rel="noreferrer" id="topbarTwitter">twitter</a>
                </div>
                <div>
                    <a href="https://orteil42.tumblr.com" target="_blank" rel="noreferrer" id="topbarTumblr">tumblr</a>
                </div>
                {/* <div style="position:relative;"><div style="width:22px;height:32px;background:url(img/discord.png);position:absolute;left:0px;top:0px;pointer-events:none;"></div><a href="https://discordapp.com/invite/cookie" target="_blank" style="padding-left:16px;" id="topbarDiscord">Discord</a></div> */}
                {/* <div style="position:relative;"><div style="width:25px;height:32px;background:url(img/weeHoodie.png);position:absolute;left:-2px;top:0px;pointer-events:none;"></div><a class="blueLink" href="http://www.redbubble.com/people/dashnet" target="_blank" style="padding-left:12px;" id="topbarMerch">Merch!</a></div> */}
                {/* <div style="position:relative;"><div style="width:22px;height:32px;background:url(img/patreon.png);position:absolute;left:0px;top:0px;pointer-events:none;"></div><a class="orangeLink" href="https://www.patreon.com/dashnet" target="_blank" style="padding-left:16px;" id="topbarPatreon">Patreon</a></div> */}
                {/* <div style="position:relative;display:none;font-weight:bold;" id="heralds"><div style="position:absolute;top:-4px;width:31px;height:39px;background:url(img/heraldFlag.png);left:50%;margin-left:-15px;pointer-events:none;"></div><div id="heraldsAmount" style="position:relative;z-index:10;text-shadow:0px 1px 0px #000,0px 0px 6px #ff00e4;color:#fff;">-</div></div> */}
                {/* <div><a class="lightblueLink" style="font-weight:bold;" href="https://play.google.com/store/apps/details?id=org.dashnet.cookieclicker" target="_blank" id="topbarMobileCC">Cookie Clicker for Android</a></div> */}
                {/* <div><a href="//orteil.dashnet.org/randomgen/" target="_blank" id="topbarRandomgen">RandomGen</a></div> */}
                {/* <div><a href="//orteil.dashnet.org/igm/" target="_blank" id="topbarIGM">Idle Game Maker</a></div> */}
                {/* <div id="links" class="hoverer">
                    Other versions
                    <div class="hoverable">
                    <a href="../" target="_blank" id="linkVersionLive">Live version</a>
                    <a href="beta" target="_blank" id="linkVersionBeta">Try the beta!</a>
                    <a href="//orteil.dashnet.org/cookieclicker/v10466" target="_blank" id="linkVersionOld">v. 1.0466</a>
                    <a href="//orteil.dashnet.org/experiments/cookie/" target="_blank">Classic</a>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default TopBar;
