$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/laqin3/eclipse-workspace/cucumber/FreeCrmBDDFramework_WithTDD/src/main/java/features/DealsMap.feature");
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
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "laqin3@gmail.com",
        "laqin32019"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "Amount",
        "probability",
        "commission"
      ],
      "line": 16
    },
    {
      "cells": [
        "test data1",
        "1000",
        "50",
        "10"
      ],
      "line": 17
    },
    {
      "cells": [
        "test data2",
        "2000",
        "150",
        "20"
      ],
      "line": 18
    },
    {
      "cells": [
        "test data3",
        "3000",
        "250",
        "30"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 7745803527,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 17109304,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.click_on_Login_in_button()"
});
formatter.result({
  "duration": 4079362851,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 510659396,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 108164509,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2008994971,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1126671997,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 12160656792,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_close_browser()"
});
formatter.result({
  "duration": 856819871,
  "status": "passed"
});
});