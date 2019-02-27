Feature: Free CRM login feature

# without Example keyword
#Scenario: Free Crm Login Test Scenario
#
#Given user is already in login page
#When title of login page is free crm
#Then click on Login_in button
#Then user enters "laqin3@gmail.com" and "laqin32019"
#Then user clicks on login button
#Then user is on home page



#with Example keyword
Scenario Outline: Free Crm Login Test Scenario

Given user is already in login page
When title of login page is free crm
Then click on Login_in button
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user close browser

Examples: 
	| username 		 	 | password  |
	| laqin3@gmail.com   | laqin32019|
	| tom				 | test456	 |




