package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition {
	//this is global
	@Before(order=0)
	public void setUp() {
		System.out.println("launch FF,   order=0");
		System.out.println("enter url for free crm app,   order=0");
	}

	@After(order=0)
	public void tearDown() {
		System.out.println("close the browser  order=0");
	}
	
	
	@Before(order=1)
	public void setUp1() {
		System.out.println("launch FF,   order=1");
		System.out.println("enter url for free crm app  order=1");
	}

	@After(order=1)
	public void tearDown1() {
		System.out.println("close the browser,  order=1");
	}
	
	
	// local adverb, only for first scenario
	@Before("@First")
	public void beforeFirst() {
		System.out.println("before only first scenario");
	}
	// local adverb, only for first scenario
	@After("@First")
	public void afterFirst() {
		System.out.println("after only first scenario");
	}
	
	@Before("@Second")
	public void beforeSecond() {
		System.out.println("before only Second scenario");
	}

	@After("@Second")
	public void afterSecond() {
		System.out.println("after only Second scenario");
	}
	
	@Before("@Third")
	public void beforeThird() {
		System.out.println("before only Third scenario");
	}

	@After("@Third")
	public void afterThird() {
		System.out.println("after only Third scenario");
	}
	
	@Given("^this is first step$")
	public void this_is_first_step()  {
	
		System.out.println("1st step");
	}

	@When("^this is second step$")
	public void this_is_second_step()  {
	
		System.out.println("2nd step");
	}

	@Then("^this is third step$")
	public void this_is_third_step()  {
	
		System.out.println("3rd step");
	}
}
