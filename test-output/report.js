$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/laqin3/eclipse-workspace/cucumber/FreeCrmBDDFramework_WithTDD/src/main/java/features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free Crm create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Login_in button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "laqin3@gmail.com",
        "laqin32019"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test data",
        "1000",
        "50",
        "10"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 7571942704,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 16699705,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.click_on_Login_in_button()"
});
formatter.result({
  "duration": 4082666952,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 447976195,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 141627065,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2027181607,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1205712289,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 2902989392,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 819699935,
  "status": "passed"
});
});