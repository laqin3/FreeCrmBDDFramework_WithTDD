$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/laqin3/eclipse-workspace/cucumber/FreeCrmBDDFramework_WithTDD/src/main/java/features/CreatingContacts.feature");
formatter.feature({
  "line": 1,
  "name": "login and creating contacts",
  "description": "",
  "id": "login-and-creating-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Creating differnt contacts",
  "description": "",
  "id": "login-and-creating-contacts;creating-differnt-contacts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-and-creating-contacts;creating-differnt-contacts;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstName",
        "lastName",
        "position"
      ],
      "line": 18,
      "id": "login-and-creating-contacts;creating-differnt-contacts;;1"
    },
    {
      "cells": [
        "laqin3@gmail.com",
        "laqin32019",
        "Tom",
        "Peter",
        "manager"
      ],
      "line": 19,
      "id": "login-and-creating-contacts;creating-differnt-contacts;;2"
    },
    {
      "cells": [
        "laqin3@gmail.com",
        "laqin32019",
        "Jim",
        "John",
        "Director"
      ],
      "line": 20,
      "id": "login-and-creating-contacts;creating-differnt-contacts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Creating differnt contacts",
  "description": "",
  "id": "login-and-creating-contacts;creating-differnt-contacts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"laqin3@gmail.com\" and \"laqin32019\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 8312383893,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 17306424,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Login_in_button()"
});
formatter.result({
  "duration": 3909096262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laqin3@gmail.com",
      "offset": 13
    },
    {
      "val": "laqin32019",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_user_enter_password(String,String)"
});
formatter.result({
  "duration": 675978792,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 261855126,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2013448083,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_contacts_button()"
});
formatter.result({
  "duration": 6049923755,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_button()"
});
formatter.result({
  "duration": 5587984490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "manager",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.user_enters_firstName_and_lastName_and_position(String,String,String)"
});
formatter.result({
  "duration": 1468448480,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 2920529629,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 810191257,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Creating differnt contacts",
  "description": "",
  "id": "login-and-creating-contacts;creating-differnt-contacts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"laqin3@gmail.com\" and \"laqin32019\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on new button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Jim\" and \"John\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 6231372832,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 26251475,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_Login_in_button()"
});
formatter.result({
  "duration": 3979814434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laqin3@gmail.com",
      "offset": 13
    },
    {
      "val": "laqin32019",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_user_enter_password(String,String)"
});
formatter.result({
  "duration": 663186922,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 233762588,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2016393786,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_contacts_button()"
});
formatter.result({
  "duration": 893548555,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_button()"
});
formatter.result({
  "duration": 592837388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 29
    },
    {
      "val": "John",
      "offset": 39
    },
    {
      "val": "Director",
      "offset": 50
    }
  ],
  "location": "LoginStepDefinition.user_enters_firstName_and_lastName_and_position(String,String,String)"
});
formatter.result({
  "duration": 1558199794,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 209265989,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 896024071,
  "status": "passed"
});
});