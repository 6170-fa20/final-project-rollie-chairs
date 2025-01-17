
# [Scope ](https://rollie-chair-scope.herokuapp.com/)

## [RO]
### Purpose and Functionality
Describe the purpose and functionality of your application (~50 words)
Scope is a crowd-sourced app that communicates to what extent a business is taking necessary safety precautions during COVID-19, creating peace of mind for prospective customers. Currently, in our app users can create business profiles which displays the business information and the metrics associated that display how the business is following COVID protocols and can access different business profiles through the business listings displayed on the home page. Users can also search for a specific business by name,look for businesses on the map, or filter for businesses on the home page.
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
  * routes/account.js
  * routes/validators.js
  * src/components/SignIn.vue
  * src/components/UserSignUp.vue
  * src/components/UserSettings.vue
  * src/components/ChangePassword.vue
  * src/components/FilterPanel.vue
  * src/views/Settings.vue
* **Kylie Carpenter**:
  * src
    * Metric.vue
    * MetricsList.vue
    * BusinessInfo.vue
    * Home.vue
    * BusinessProfile.vue
    * BusinessContainer.vue
  * models:
    * ConfirmDeny.js
    * Debugged Business.js and Metrics.js
  * db:  
    * db_config.js.
      * createConfirmDenyTable()
  * routes:
    * index.js
    * updated metrics.js
  * Boilerplate code (main.js, web.css, babel.config.js, router.js, etc.)
* **Noah Zamzow-Schmidt**:
  * db
    * added User Database
  * models
    * Business.js
      * findLocs
    * User.js
  * public:
    * javascripts
      * services.js
  * routes:
    * business.js
    * index.js
    * metrics.js
  * src
    * components
      * MapObject.vue
      * NavBar.Vue
        * added map tab
    * views
      * Map.vue
* **Shariqah Hossain**:  
  * models:
    * Metrics.js
  * db:  
    * db_config.js.
      * createMetricTable()
  * src:  
    * components/BusinessListing.vue  
    * components/FilterPanel.vue
    * views/Home.vue
  * styling:
    * home page
    * business profile page
    * navigation bar
