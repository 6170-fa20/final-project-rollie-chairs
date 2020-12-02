## index.js  
/* GET home page. */  
router.get('/', (req, res) => {
});

## business.js  
/**
 * List all businesses
 * @name GET/api/business
 * @return {Business[]} - list of businesses  
*/  
router.get('/all', async (req, res) => {
});

/**
 * List all businesses
 * @name GET/api/business/locations
 * @return {Business[]} - list of businesses  
 */  
router.get('/all/locations', async (req, res) => {
});

/**
 * Get the business with the given ID
 * @name GET/api/business/:businessID
 * @return {Business} - business object  
 */  
router.get('/id/:businessID', async (req, res) => {
});

/**
 * Get list of available statuses  
 */  
router.get('/statuses',(req, res) => {
});

/**
 * Get list of available business types  
 */  
router.get('/types',(req, res) => {
});

/**
 * Create a business
 * @name POST/api/business
 * @param {string} name - the name of the business
 * @return {Business} - the created business  
 */  
router.post('/', async (req, res) => {
});

/**
 * Edit a business
 * @name PUT/api/business/:id
 * :id the id of the business
 * @param {string} name - the new name of the business
 * @param {string} status - the new status of the business
 * @param {string} email - the new email of the business
 * @param {string} phone - the new phone of the business
 * @param {string} address - the new address of the business
 * @param {string} type - the new type of the business
 * @param {string} description - the new description of the business
 * @param {string} password - the new password of the business
 * @return {Business} - the updated business
 * @throws {404} - if business does not exist  
 */  
router.put('/id/:id', async (req, res) => {
});

/**
 * Delete a business
 * @name DELETE/api/business/:id
 * :id the id of the business
 * @return {Business} - the deleted business
 * @throws {404} - if business does not exist  
 */  
router.delete('/:id', (req, res) => {
});

# metrics.js  

/**
 * List all metrics for restaurants
 * @name GET/api/metrics/list/restaurants
 * @return {Metric[]} - list of metrics  
 */  
router.get('/list/restaurants', async (req, res) => {
});


/**
 * List all metrics for general businesses
 * @name GET/api/metrics/list/general
 * @return {Metric[]} - list of metrics  
 */  
router.get('/list/general', async (req, res) => {
});

/**
 * List all metrics for a business
 * @name GET/api/metrics/:businessID
 * @return {Metric[]} - list of metrics  
 */  
router.get('/:businessID', async (req, res) => {
});

/**
 * Confirm a metric
 * @name PUT/api/metrics/confirmation/:id
 * :id the id of the metric
 * @return {Metric} - the newly confirmed metric
 * @throws {404} - if metric does not exist  
 */  
router.put('/confirmation/:id', async (req, res) => {
});

/**
 * Deny a metric
 * @name PUT/api/metrics/refutation/:id
 * :id the id of the metric
 * @return {Metric} - the newly denied metric
 * @throws {404} - if metric does not exist  
 */  
router.put('/refutation/:id', async (req, res) => {
});
