import React from 'react';
import Logger from './utils/Logger';
import { shuffle } from './utils/Helper';

const logger = new Logger('Home');

class Home extends React.Component {
    render() {

        return (
            <main>
                <section>
                    <header>
                        <h2>Application</h2>
                        <span>(Query Parameters: appId)</span>
                    </header>

                    <article>
                        <div className="two-columns">
                            <div className="form-element select-element">
                                <label htmlFor="apps">Apps</label>
                                <select id="apps" value=""></select>
                            </div>
                            <div className="form-element input-element">
                                <label htmlFor="appId">App ID</label>
                                <input id="appId"type="text" value="" />
                            </div>
                        </div>
                        <div className="form-element button-element">
                            <button id="initSession">Start Session</button>
                            <button id="toggleDashboard" className="button-loading">Show Dashboard</button>
                        </div>
                    </article>
                </section>

                <section>
                    <header>
                        <h2>Manifest & License</h2>
                    </header>

                    <article>
                        <div className="element-with-button">
                            <div className="form-element input-element">
                                <label htmlFor="manifestUrl">Manifest URL</label>
                                <input id="manifestUrl" type="text" value="" />
                            </div>
                            <div className="form-element button-element">
                                <button id="loadManifest">Load Manifest</button>
                            </div>
                        </div>
                        <div className="select-element">
                            <label htmlFor="manifests">Manifests</label>
                            <select id="manifests" value=""></select>
                        </div>
                        <div className="two-columns">
                            <div className="form-element input-element">
                                <label htmlFor="drmLicenseUri">DRM License URI</label>
                                <input id="drmLicenseUri" type="text" value="" />
                            </div>
                            <div className="form-element select-element">
                                <label htmlFor="licenseOverride">License Override</label>
                                <select id="licenseOverride" value=""></select>
                            </div>
                        </div>
                    </article>
                </section>

                <section>
                    <header>
                        <h2>Content</h2>
                    </header>

                    <article>
                        <div className="select-element">
                            <label for="streams">Streams</label>
                            <select id="streams" value=""></select>
                        </div>
                        <div className="form-element input-element">
                            <label for="authToken">Auth Token</label>
                            <input id="authToken" type="text" value="" />
                        </div>
                        <div className="two-columns">
                            <div className="form-element input-element">
                                <label for="streamUrl">Stream URL</label>
                                <input id="streamUrl" type="text" value="" />
                            </div>
                            <div className="select-element">
                                <label for="streamType">Stream Type</label>
                                <select id="streamType" value="">
                                    <option value="">----</option>
                                    <option value="vod">VOD</option>
                                    <option value="live">LIVE</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-element checkbox-element">
                            <input type="checkbox" id="useWidevine" />
                            <span className="checkbox-custom"></span>
                            <label htmlFor="useWidevine">Use Widevine</label>
                        </div>
                        <div className="two-columns">
                            <div className="form-element input-element">
                                <label for="audioSegmentType">Audio Segment Type</label>
                                <input id="audioSegmentType" type="text" value="" />
                            </div>
                            <div className="form-element input-element">
                                <label for="videoSegmentType">Video Segment Type</label>
                                <input id="videoSegmentType" type="text" value="" />
                            </div>
                        </div>
                        <div className="two-columns">
                            <div className="select-element">
                                <label for="audioLanguage">Audio Tracks</label>
                                <select id="audioLanguage" value=""></select>
                            </div>
                            <div className="select-element">
                                <label for="subtitlesLanguage">Subtitles Renditions</label>
                                <select id="subtitlesLanguage" value=""></select>
                            </div>
                        </div>
                        <div className="two-columns">
                            <div className="form-element input-element">
                                <label for="title">Title</label>
                                <input id="title" type="text" maxlength="20" />
                            </div>
                            <div className="form-element input-element">
                                <label for="subtitle">Subtitle</label>
                                <input id="subtitle" type="text" maxlength="20" />
                            </div>
                        </div>
                        <div className="two-columns">
                            <div className="form-element checkbox-element">
                                <input type="checkbox" id="autoplay" />
                                <span className="checkbox-custom"></span>
                                <label htmlFor="autoplay">Auto Play</label>
                            </div>
                            <div className="form-element checkbox-element">
                                <input type="checkbox" id="watchLive" />
                                <span className="checkbox-custom"></span>
                                <label htmlFor="watchLive">Watch Live</label>
                            </div>
                        </div>
                        <div className="element-with-button">
                            <div className="form-element input-element">
                                <label for="currentTime">Current Time</label>
                                <input id="currentTime" type="text" value="0" />
                            </div>
                            <div className="button-element">
                                <button id="castSubmit">Cast!</button>
                            </div>
                        </div>
                    </article>
                </section>

                <section>
                    <header>
                        <h2>Media Controls</h2>
                    </header>

                    <article>
                        <div className="button-element media-controls">
                            <button id="playOrPause"><div class="play"></div></button>
                            <button id="seekBackward">- 30s</button>
                            <button id="seekForward">+ 30s</button>
                            <button id="seekToLive">Seek To Live</button>
                            <button id="stop"><div class="stop"></div></button>
                        </div>
                        <div className="element-with-button">
                            <div className="form-element input-element">
                                <label for="seekToTime">Seek To Time</label>
                                <input id="seekToTime" type="text" value="60" />
                            </div>
                            <div className="button-element">
                                <button id="seek">Seek</button>
                            </div>
                        </div>
                        <div className="element-with-button">
                            <div className="form-element select-element">
                                <label for="setAudio">Audio Tracks</label>
                                <select id="setAudio" value=""></select>
                            </div>
                            <div className="button-element">
                                <button id="resetAudio">Reset</button>
                                <button id="audioStatus">Status</button>
                            </div>
                        </div>
                        <div className="element-with-button">
                            <div className="form-element select-element">
                                <label for="setSubtitles">Subtitles Renditions</label>
                                <select id="setSubtitles" value=""></select>
                            </div>
                            <div className="button-element">
                                <button id="resetSubtitles">Reset</button>
                                <button id="subtitlesStatus">Status</button>
                            </div>
                        </div>
                        <div className="element-with-button">
                            <div className="form-element input-element">
                                <label for="subtitlesStyleJson">Subtitles Style</label>
                                <textarea rows="8" id="subtitlesStyleJson"></textarea>
                            </div>
                            <div className="button-element">
                                <button id="subtitlesStyle">Set Style</button>
                            </div>
                        </div>
                        <div className="form-element input-element">
                            <span id="mediaMetadata" class="mediaMetadata"></span>
                            <input id="seekBar" class="seekBar" type="range" min="0" max="100" />
                            <span id="mediaTime" class="mediaTime"></span>
                        </div>
                    </article>
                </section>
            </main>
        );
    };
};

export default Home;
