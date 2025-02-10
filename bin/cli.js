#!/usr/bin/env node

const { execSync } = require("child_process");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

async function main() {
  console.log(chalk.blue("🚀 Welcome to Create React Starter!"));

  // Dynamically import ora (since it's ESM)
  const { default: ora } = await import("ora");

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      validate: (input) => (input ? true : "Project name cannot be empty!"),
    },
    {
      type: "list",
      name: "projectType",
      message: "Do you want to set up a frontend, backend, or full-stack project?",
      choices: ["Frontend", "Backend", "Full-Stack"],
    },
    {
      type: "list",
      name: "template",
      message: "Choose your frontend template:",
      choices: ["react_tailwindcss", "react_bootstrap"],
      when: (answers) => answers.projectType === "Frontend" || answers.projectType === "Full-Stack",
    },
  ]);

  const { projectName, projectType, template } = answers;
  console.log(chalk.green(`🚀 Setting up ${projectName} as a ${projectType} project...`));

  // Initialize spinner
  const spinner = ora("Setting up your project, please wait a few seconds...").start();

  try {
    // Create the project folder
    fs.ensureDirSync(projectName);

    if (projectType === "Frontend") {
      const frontendTemplatePath = path.join(__dirname, "..", "frontend", template);
      fs.copySync(frontendTemplatePath, path.join(process.cwd(), projectName));

      spinner.succeed("✅ Frontend project setup complete!");
      console.log(chalk.yellow(`cd ${projectName}`));
      console.log(chalk.yellow("npm install"));
      console.log(chalk.yellow("npm start"));

    } else if (projectType === "Backend") {
      const backendTemplatePath = path.join(__dirname, "..", "backend");
      fs.copySync(backendTemplatePath, path.join(process.cwd(), projectName));

      spinner.succeed("✅ Backend project setup complete!");
      console.log(chalk.yellow(`cd ${projectName}`));
      console.log(chalk.yellow("npm install"));
      console.log(chalk.yellow("nodemon ----------- npm run dev"));
      console.log(chalk.yellow("server ------------ npm run start"));

    } else if (projectType === "Full-Stack") {
      const fullstackPath = path.join(__dirname, "..", "full_stack");
      fs.copySync(fullstackPath, path.join(process.cwd(), projectName));

      spinner.succeed("✅ Full-Stack project setup complete!");
      console.log(chalk.yellow(`cd ${projectName}`));
      console.log(chalk.yellow("cd backend && npm install"));
      console.log(chalk.yellow("cd frontend && npm install"));
      console.log(chalk.yellow("Start Backend: cd backend && npm run dev"));
      console.log(chalk.yellow("Start Frontend: cd frontend && npm start"));
    }
  } catch (error) {
    spinner.fail("❌ Error setting up the project.");
    console.error(chalk.red(error.message));
  }
}

main();
