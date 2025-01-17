// Show an object on the screen.
function showObject(obj) {
  const pre = document.getElementById('response');
  const preParent = pre.parentElement;
  pre.innerText = JSON.stringify(obj, null, 4);
  preParent.classList.add('flashing');
  setTimeout(() => preParent.classList.remove('flashing'), 300);
}

// Axios responses have a lot of data. This shows only the most relevant data.
function showResponse(axiosResponse) {
  const fullResponse = axiosResponse.response === undefined
    ? axiosResponse
    : axiosResponse.response;
  const abridgedResponse = {
    data: fullResponse.data,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
  };
  showObject(abridgedResponse);
}

// IT IS UNLIKELY THAT YOU WILL WANT TO EDIT THE CODE ABOVE

// EDIT THE CODE BELOW TO SEND REQUESTS TO YOUR API

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

/**
 * You can use axios to make API calls like this:
 * const body = { bar: 'baz' };
 * axios.post('/api/foo', body)
 *   .then(showResponse) // on success (Status Code 200)
 *   .catch(showResponse); // on failure (Other Status Code)
 * See https://github.com/axios/axios for more info
 */

// Hint: do not assume a 1:1 mapping between forms and routes

function createBusiness(fields) {
  axios.post('/api/business', fields)
    .then(showResponse)
    .catch(showResponse);
}

function editBusiness(fields) {
  axios.put('/api/business/' + fields.id, fields)
    .then(showResponse)
    .catch(showResponse);
}

function viewAllBusinesses() {
  axios.get('/api/business', fields)
    .then(showResponse)
    .catch(showResponse);
}

function viewAllBusinessesLocations(fields) {
  axios.get('/api/business/locations', fields)
    .then(showResponse)
    .catch(showResponse);
}

function deleteBusiness(fields) {
  axios.delete('/api/business/' + fields.id, fields)
    .then(showResponse)
    .catch(showResponse);
}

function getGeneralMetrics(fields) {
  axios.get('/api/metrics/list/general', fields)
    .then(showResponse)
    .catch(showResponse);
}

function getRestaurantMetrics(fields) {
  axios.get('/api/metrics/list/restaurants', fields)
    .then(showResponse)
    .catch(showResponse);
}

function getBusinessMetrics(fields) {
  axios.get('/api/metrics/' + fields.businessID, fields)
    .then(showResponse)
    .catch(showResponse);
}

function confirmMetric(fields) {
  axios.get('/api/metrics/confirmation/' + fields.id, fields)
    .then(showResponse)
    .catch(showResponse);
}

function denyMetric(fields) {
  axios.get('/api/metrics/refutation/' + fields.id, fields)
    .then(showResponse)
    .catch(showResponse);
}
// IT IS UNLIKELY THAT YOU WILL WANT TO EDIT THE CODE BELOW

// map form (by id) to the function that should be called on submit
const formsAndHandlers = {
  'create-business': createBusiness,
  'edit-business': editBusiness,
  'view-all-businesses': viewAllBusinesses,
  'view-all-businesses-locations': viewAllBusinessesLocations,
  'delete-business': deleteBusiness,
  'get-business-metrics': getBusinessMetrics,
  'confirm-metric': confirmMetric,
  'denyMetric': denyMetric,
  'get-general-metrics': getGeneralMetrics,
  'get-restaurant-metrics': getRestaurantMetrics
};

// attach handlers to forms
function init() {
  Object.entries(formsAndHandlers).forEach(([formID, handler]) => {
    const form = document.getElementById(formID);
    form.onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      (new FormData(form)).forEach((value, key) => {
        data[key] = value;
      });
      handler(data);
      return false; // don't reload page
    };
  });
}

window.onload = init; // attach handlers once DOM is ready
