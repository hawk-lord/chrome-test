/**
 * Created by per on 2016-05-24.
 */

console.log("content.js");

const Content = (function() {
    "use strict";
    console.log("Content");
    const makeRandomColor = function(){
        let c = '';
        while (c.length < 6) {
            c += (Math.random()).toString(16).substr(-6).substr(-1)
        }
        return '#'+c;
    };

    document.body.style.backgroundColor = makeRandomColor();

    }
)();

