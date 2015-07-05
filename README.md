Angular Mobile Seed
-------------------

Simple mobile application seed with login form and sliding menu

How to develop
--------------

cd src/main/webapp; python -m SimpleHTTPServer

Go in the browser http://localhost:8000/index.dev.html


How to make production build
----------------------------

mvn -Pprod clean package

Production WAR contains Angular webjars as dependencies, production version of the index.html and minified version of CSS and JS.