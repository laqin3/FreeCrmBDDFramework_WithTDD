Feature: deal data creation

Scenario:  Free Crm create a new deal scenario

Given user is already in login page
When title of login page is free crm
And click on Login_in button
Then user enters username and password
| laqin3@gmail.com | laqin32019 |

Then user clicks on login button
Then user is on home page
Then user moves to new deals page
Then user enters deal details
| test data | 1000 | 50 | 10 |

Then user close browser