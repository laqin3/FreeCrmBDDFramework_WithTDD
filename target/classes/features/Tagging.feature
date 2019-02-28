@FunctionalTest
Feature: Free CRM application testing

@SmokeTest @RegressionTest
Scenario: Login with the correct username and correct password
Given This is a valid login test

@RegressionTest
Scenario: Login with the incorrect username and correct password
Given This is a invalid login test

@SmokeTest
Scenario: Create a contact
Given this is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given this is a deal test case

@RegressionTest
Scenario: Create a tasks
Given this is a tasks test case

@SmokeTest
Scenario: Create a case
Given this is a case test case

@SmokeTest @RegressionTest
Scenario: Verify left panel links
Given clicking on left panel links

@SmokeTest
Scenario: Search a deal
Given this is a search deal test

@SmokeTest
Scenario: Search a contact
Given this is a search contact test

@SmokeTest @RegressionTest
Scenario: Search a case
Given this is a search case test

@SmokeTest @RegressionTest
Scenario: Search a task
Given this is a search task test

@SmokeTest @End2End
Scenario: Search a call
Given this is a search call test

@SmokeTest @End2End
Scenario: Search a email
Given this is a search email test

@SmokeTest @End2End
Scenario: Search a docs
Given this is a search docs test

@SmokeTest @End2End
Scenario: Search a forms
Given this is a search forms test

@End2End
Scenario: Validate a report
Given this is a report test

@End2End
Scenario: Application logout
Given this is a logout test

Scenario: browser close
Given this is close browser test







