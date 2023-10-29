# liatrio_exercise
this is an exercise with the purpose of creating a web application and deploying it to a cloud platform

steps in a broad sense
install node.js, use express.js, single end-point web app, and returns JSON object

dev-log #1 10/27/2023

Created a Dockerfile that runs on an image of Linux called Alpine, then installed Nodejs. then made a simple script to test
whether or not Bodejs works. it did work however I've just started and what I have done seems pretty basic in nature. I have just started a simple Nodejs server that runs on a local port that one can go to and see the text "hello world" on the page. The port was originally 3000 when tested but has since changed the port to 8000 because of preference. there is some more research to be done whats the best practices regarding docker. I've read a good chunk of the docker docs forms to get a good sense of what is expected but I shall continue to read and research things that would be beneficial to this project. good initial push.

dev-log #1 10/28/2023

Today I have spent a lot of time learning about this project in general before continuing with node.js I read up on most of the guided docs on their website to get a rough idea of what I'm working with. This includes This includes but is not limited to, differences between blocking and non-blocking in node.js, some information about synchronous and asynchronous implementation advantages and disadvantages regarding blocking and not. I read much about how to optimize docker files to speed up build time by using nifty tricks regarding the cache and different layers. I read about express.js or I read what I could about this. There was not too much good documentation on this subject.  I read about what a package.json file is and why we need it. I added a .dockerignore file because node,js documentation had recommended it i need to review the reasoning behind this. and then recently I have gotten my workflows to work in some capacity. It passes all tests when I build the docker image on github. This was I think the thing that took me the longest today to accomplish because I kept making silly mistakes. I was trying to use node:18 in the runs-on section of the docker-hub.yml which gave me errors. I then realized that I had to name my image after a docker repo that I had made. I did not know I had to do all this so it took time to figure out. So this has been a good progress day I feel I understand a lot more 




