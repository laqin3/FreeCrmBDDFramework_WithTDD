package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\laqin3\\eclipse-workspace\\cucumber\\FreeCrmBDDFramework_WithTDD\\src\\main\\java\\features\\DealsMap.feature",
		glue= {"stepDefinition"},
		format= {"pretty","html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.junit"},
		monochrome=true,
		strict=true,
		dryRun=false
		)



public class TestRunner_Login {

}
