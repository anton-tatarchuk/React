import React, { Component } from "react";

export default class YoutubeEmbed extends Component {
    state = {
        player: {}
    }
    scriptInit = () => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.onload = () => tagLoaded();

        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        function tagLoaded() {
            window.YT.ready(() => {
                this.setState = {
                    player: new window.YT.Player("player", {
                        height: "360",
                        width: "640",
                        videoId: "M7lc1UVf-VE",
                        events: {
                            onReady: function () {
                                console.log("READY");
                            },
                        },
                    })
                }
            });
        }
    };

    render() {
        return (
            <div>
                {this.scriptInit()}

                <div id="player"></div>
            </div>
        );
    }
}

// export default YoutubeEmbed;
