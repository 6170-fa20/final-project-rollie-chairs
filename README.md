
# [Scope ](https://rollie-chair-scope.herokuapp.com/)

## [RO]
### Purpose and Functionality
Describe the purpose and functionality of your application (~50 words)
Scope is a crowd-sourced app that communicates to what extent a business is taking necessary safety precautions during COVID-19, creating peace of mind for prospective customers. Currently, in our app users can create business profiles which displays the business information and the metrics associated that display how the business is following COVID protocols and can access different business profiles through the business listings displayed on the home page. Users can also search for a specific business by name or look for businesses on the map. 
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

then you will find the application at `localhost:8080` in the browser



### Authorship:
* **Sam Sappenfield**:
  * models/Business.js
  * db_config.js
      createBusinessTable() 
  * src/components/NavBar.vue
  * src/components/BusinessSignUpForm.vue
  * src/views/BusinessSignUp.vue
* **Kylie Carpenter**:
  * src
    * Metric.vue
    * MetricsList.vue
    * BusinessInfo.vue
    * Home.vue
    * BusinessProfile.vue 
  * models:
    * Debugged Business.js and metrics.js
  * routes:
    * index.js
  * Boilerplate code (main.js, web.css, babel.config.js, router.js, etc.)
* **Noah Zamzow-Schmidt**:
  * public:
    * javascripts
        * services.js
  * routes:
    * business.js
    * index.js
    * metrics.js
* **Shariqah Hossain**:  
  * models:
    * Metrics.js
  * db:  
    * db_config.js. 
      * createMetricTable()
  * src:  
    * components/BusinessListing.vue  
    * views/Home.vue