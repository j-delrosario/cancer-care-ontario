# Intro

In terms of architecture, the team decided that we should use the MERN stack to create two decoupled applications as per the bezos dictum in order to create the proposed system. If necessary we can split our frontend app to more specialized Form Manager and Form Filler versions, but complicated UIs are not one of our learning goals. Our decision to use this stack was based on two principles, the first being familiarity between team members, and the second was its ease of use. By familiarity, we mean to say that all of us are particularly comfortable with using the MERN stack to create applications to create both the front-end of an application as well as the back-end of an application. Secondly, we found that using the CLIs (Command Line Interfaces) that were built into both Node and React accelerated our progress as there was little setup needed in terms of configuring webpack, babel, and getting the packages we needed for us to be able to get started with coding. 

# BACK-END | NodeJS, Express, MongoDB

For the backend, we chose to go with Node.js since many of our group members were familiar with the engine, and with JavaScript. Naturally, express was a great framework choice for us. We considered similar frameworks such as Koa, but ultimately decided on express due to its large usage and documentation. In terms of database choice, we chose to use the non-relational MongoDB database. We considered using relational database technology, such as MySQL, however ultimately landed on MongoDB because of prior familiarity, and because we will be interacting heavily with JSON. 

# FRONT-END | React, Material UI

For the frontend, we decided that React was the best choice since several of our members were already familiar with it. React is fast and simple to use. It also allows us to create reusable UI components. React is easy to learn so those who were not familiar could quickly learn it.

Material UI allows us to use visual components that were firstly clean, and lean, to keep our client-side form filler pretty and usable.
