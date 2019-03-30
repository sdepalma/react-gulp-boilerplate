import React from 'react';
import sha256 from 'crypto-js/sha256';
import Logger from './utils/Logger';
import { shuffle } from './utils/Helper';

const logger = new Logger('Home');

class Home extends React.Component {
    render() {
        let shuffledArray = shuffle(["1", "2", "3"]);
        logger.log("shuffledArray", shuffledArray);

        const ppid = "00u5006jbYG1SRHUH356";
        const hash = sha256(ppid);
        logger.log(`hash: ${hash.toString()}`);
        // const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

        return (
            <div id="home-container" className="container">
                <header>
                    <h1>Home</h1>
                </header>
                <div id="home-content" className="page">
                    <p>Content</p>
                    <p>PPID: {ppid}</p>
                    <p>SHA256: {hash.toString()}</p>
                </div>
            </div>
        );
    };
};

export default Home;
