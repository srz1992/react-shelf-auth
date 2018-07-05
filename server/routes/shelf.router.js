const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    console.log('in /shelf GET route');
    console.log('authenticated:', req.isAuthenticated());
    console.log('user', req.user);
    
    if(req.isAuthenticated()){
        let queryText = `SELECT * FROM item`;
        pool.query(queryText).then((result) =>{
            console.log('result.rows:', result.rows);
            res.send(result.rows)
        }).catch((error)=>{
            console.log('error!:', error);
            res.sendStatus(500);
        })
    }
    else {
        res.sendStatus(403);
    }    
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;