
# [Scope ](https://rollie-chairs-scope.herokuapp.com/)
in order to see the business profiles you can go to https://rollie-chairs-scope.herokuapp.com/businesses/1 and https://rollie-chairs-scope.herokuapp.com/businesses/2
## [RO]
### Purpose and Functionality
Describe the purpose and functionality of your application (~50 words)
Scope is a crowd-sourced app that communicates to what extent a business is taking necessary safety precautions during COVID-19, creating peace of mind for prospective customers. Currently, in our app there is a business profile for one business which displays the business information and the metrics associated that display how the business is following COVID protocols.
### Instructions to Run Locally:
In command line:
```console
$ npm run build
$ npm run serve
```
In a separate shell:
```console
$ npm run awesome
```
we have two hard coded businesses in our database currently you can then find each at  `localhost:8080/businesses/1` and
`localhost:8080/businesses/2` 


### Authorship:
* **Sam Sappenfield**:
  * models/Business.js
    * db_config.js
        createBusinessTable()    
* **Kylie Carpenter**:
  * src
    * HomePage.vue
    * Test.vue
  * models:
    * Model1.js
    * Model2.js
    * Users.js
  * routes:
    * route1.js
    * route2.js
    * users.js
    * index.js
  * Boilerplate code (main.js, babel.config.js, router.js, etc.)
* **Noah Zamzow-Schmidt**:
  * public:
    * javascripts
        * services.js
  * routes:
    * business.js
    * index.js
    * metrics.js
* **Shariqah Hossain**:
  * src
    * HomePage.vue
    * Test.vue
  * models:
    * Model1.js
    * Model2.js
    * Users.js
  * routes:
    * route1.js
    * route2.js
    * users.js
    * index.js
  * App.vue/router.js
