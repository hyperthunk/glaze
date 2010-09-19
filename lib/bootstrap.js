// -----------------------------------------------------------------------------
// name: bootstrap.js
// description: bootstrap the runtime
// version: 0.0.1
// 
//
// Copyright (c) 2010 Tim Watson (watson.timothy@gmail.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// -----------------------------------------------------------------------------
//
var __bootstrap_jsloader = function(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (callback) {
        script.onreadystatechange = function() {
            if (this.readyState == 'loaded') callback();
        }
        script.onload = callback;
    }
    head.appendChild(script);
};

/*
 * load(urls) - load the javascripts at the specified urls, one at a time
 */
var load = function(urls, iteration) {
    if (!iteration) iteration = 0;
    if (urls[iteration]) {
        __bootstrap_jsloader(urls[iteration],
        function() {
            load(urls, iteration + 1);
        })
    }
};


