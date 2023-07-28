#!/usr/bin/env node

'use strict'

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
import fs from "fs";
import request from "request";
import path from "path";
import ora from "ora";
import cliSpinners from "cli-spinners";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:bhardwajvaibhav186@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    const loader = ora({
                        text: ' Downloading Resume',
                        spinner: cliSpinners.material,
                    }).start();
                
                    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1FQw-c-ccLfGzI29cgGJQ9H_7x91GwwY9';
                    open(resumeUrl);
                
                    loader.stop();
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/vxibhxv/meet');
                    console.log("\n See you at the meeting \n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("            Vaibhav Bhardwaj"),
    handle: chalk.white("@vxibhxv"),
    work: `${chalk.white("Fellow at")} ${chalk
        .hex("#2b82b2")
        .bold("Keploy")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("__vxibhxv"),
    github: chalk.gray("https://github.com/") + chalk.green("vaibhavx42"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyan("bhardwajvaibhav42"),
    web: chalk.cyan("https://vxibhxv.co"),
    npx: chalk.red("npx") + " " + chalk.white("bvaibhav"),



    labelWork: chalk.white.bold("     Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn:chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green",
        //  align: "center", // Add this line to center the content
        // dimBorder: true, // Add this line to dim the border
    }
);


console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());