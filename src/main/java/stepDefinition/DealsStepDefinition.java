package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepDefinition {

	WebDriver driver;

	@Given("^user is already in login page$")
	public void user_is_already_in_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\laqin3\\eclipse-workspace\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}

	@When("^title of login page is free crm$")
	public void title_of_login_page_is_free_crm() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud for sales and service", title);
	}

	@And("^click on Login_in button$")
	public void click_on_Login_in_button() {
		driver.findElement(By.xpath("//a[@href='https://ui.cogmento.com']")).click();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[text()='Login']")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws InterruptedException {
		String title2 = driver.getTitle();
		System.out.println("last page title is:  " + title2);
		Assert.assertEquals("Cogmento CRM", title2);
		Thread.sleep(2000);
	}

	@Then("^user moves to new deals page$")
	public void user_moves_to_new_deals_page() {

		WebElement mainMenu = driver.findElement(By.xpath("//div[@id='main-nav']"));
		List<WebElement> menuItems = mainMenu.findElements(By.tagName("a"));
		for (WebElement item : menuItems) {
			String itemText = item.getText();
			if (itemText.equalsIgnoreCase("Deals")) {
				item.click();
			}
		}
		driver.findElement(By.xpath("//*[text()='New']")).click();
	}

	@Then("^user enters deal details$") 
	public void user_enters_deal_details(DataTable dealData) throws InterruptedException {
		List<List<String>> dealValues=dealData.raw();
		
		driver.findElement(By.name("title")).sendKeys(dealValues.get(0).get(0));
		driver.findElement(By.name("amount")).sendKeys(dealValues.get(0).get(1));
		driver.findElement(By.name("probability")).sendKeys(dealValues.get(0).get(2));
		driver.findElement(By.name("commission")).sendKeys(dealValues.get(0).get(3));
		Thread.sleep(2000);
	}

	@Then("^user close browser$")
	public void user_close_browser() {

		if (!(driver.equals(null))) {
			driver.quit();
		}
	}

}
