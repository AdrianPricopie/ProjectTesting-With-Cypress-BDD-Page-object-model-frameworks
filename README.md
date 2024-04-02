# Automated Testing Project for Evomag.ro Website :computer:
Welcome to the documentation for the automated testing project designed for the **EvoMag.ro website.** This project leverages **Cypress, BDD (Behavior-driven development) with Cucumber.js, and the POM (Page Object Model) framework** to implement a robust suite of tests, ensuring the functionality and reliability.

1. [Introduction/Tools and version](#introduction-notebook)
2. [Project Structure](#project-structure)
3. [Test Scenario](#test-scenarios-for-login-functionality)
4. [Getting-Started](#getting-started--pushpin)
7. [Reports](#reports)

# Introduction :notebook:
 
This project aims to implement automated tests for the evomag website using Cypress and the combination of BDD (Behavior-driven development) and POM (Page Object Model) frameworks. 


Tools and Versions
- Cypress version: [![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&logoColor=33ff99&style=for-the-badge)](https://www.cypress.io)
- Editor code:**VsCode** latest versions
- imports :
 [badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
   


**EvoMag.ro** is one of the largest online stores in Romania, specializing in selling a wide range of electronic products, appliances, IT&C, as well as products for home and garden.

- [Documentation website](https://www.evomag.ro/pagini/termeni-de-utilizare/)
- [Website](https://www.evomag.ro/?nocampaignredirect&_gl=1*q66mha*_up*MQ..&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1s7t4pasZD7s4ZHWI6q9T65gCznvGFuRPnPQYF60YVY_Pg3_9oGHaAaAswEEALw_wcB)


**Behavior-driven development (BDD)** is an Agile software development methodology in which an application is documented and designed around the behavior a user expects to experience when interacting with it. By encouraging developers to focus only on the requested behaviors of an app or program, BDD helps to avoid bloat, excessive code, unnecessary features or lack of focus. This methodology combines, augments and refines the practices used in test-driven development (TDD) and acceptance testing.

[**Cucumber**](https://cucumber.io/) is a testing framework that supports Behavior-Driven Development (BDD). It allows you to write test cases in a human-readable format using the Gherkin syntax, which is easily understandable by both technical and non-technical stakeholders.

**Designing a Page Object** in test automation involves creating a representation of a web page or component in your application, encapsulating its elements and behaviors.

# Project structure 

The project structure for the automated testing project of EvoMag.ro website is organized as follows:



### Project Structure Overview:

- **cypress/**: This directory contains all the Cypress-specific files and folders.
  - **fixtures/**: Contains static data used by tests, such as JSON files.
  - **integration/**: Contains test files written in Cucumber's Gherkin syntax, such as `Wishlist.feature`.
  - **plugins/**: Cypress plugins configuration, if any.
  - **support/**: Contains test configuration and utility functions, including step definitions for Cucumber tests.
  - **pageObjects/**: Contains Page Object Model (POM) classes, each representing a page or component of the EvoMag.ro website. For example, `LoginPage.js` represents the login page.
- **node_modules/**: This directory contains all the Node.js modules installed via npm, including Cypress and any other dependencies.
- **cypress.json**: Cypress configuration file, which may include settings such as base URL, viewport size, etc.
- **package.json**: Node.js dependencies and scripts for managing the project.
- **README.md**: Project documentation, including an overview, setup instructions, and other relevant information.

This project structure is designed to promote modularity, maintainability, and scalability of the automated testing suite for the EvoMag.ro website. The use of the Page Object Model (POM) facilitates the abstraction of UI elements and interactions, while the integration with Cucumber enables Behavior-Driven Development (BDD) and enhances collaboration between technical and non-technical stakeholders.


