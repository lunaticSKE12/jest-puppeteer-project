
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar'
import { username, password, timeout } from '../config'

describe('End-To-End Test', () => {
  let homePage
  let loginPage
  let topBar
  let feedbackPage

  beforeAll(async () => {
    jest.setTimeout(timeout);
    homePage = new HomePage();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
    topBar = new TopBar();
  })

  it('should load homepage', async () => {
    await homePage.visit();
    await homePage.isNavbarDisplayed();
  })

  it('should submit feedback ', async () => {
    await homePage.clickFeedbackLink();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback("Johny The Sales", "john@email.com", "subject", "some comment")
  })

  it('should login to application', async () => {
    await homePage.visit()
    await topBar.isTopBarDisplayed()
    await topBar.clickSignInButton()
    await loginPage.isLoginFormDisplayed()
    await loginPage.login(username, password)
  })

})
