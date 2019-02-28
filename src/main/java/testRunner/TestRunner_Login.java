package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\laqin3\\eclipse-workspace\\cucumber\\FreeCrmBDDFramework_WithTDD\\src\\main\\java\\features\\Tagging.feature",
		glue= {"stepDefinition"},
		format= {"pretty","html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.junit"},
		monochrome=true,
		strict=true,
		dryRun=false,
		tags= {"~@SmokeTest","~@RegressionTest", "~@End2End"}
		)



public class TestRunner_Login {

}
     //OR:    tags= {"@SmokeTest, @RegressionTest"}  --execute all tests tagged as @SmokeTest OR @RegressionTEst
     //And:   tags= {"@SmokeTest, @RegressionTest"}----execute all tests tagged as @SmokeTest AND @RegressionTest
     //~ :    tags= {"~@SmokeTest","~@RegressionTest", "~@End2End"}   ignore