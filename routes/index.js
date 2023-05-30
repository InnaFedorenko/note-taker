const router = require('express').Router();
// // import the other routers
// const viewRoutes = require('./views');
// const apiRoutes = require('./api');

// // // router.get("/works", (req, res) => {
// // //   res.send("My day was great!");
// // // });
// // router.use('/', viewRoutes);
// router.use('/api', apiRoutes);

// module.exports = router;


const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./nodes');

const app = express();

app.use('/nodes', tipsRouter);

module.exports = app;

