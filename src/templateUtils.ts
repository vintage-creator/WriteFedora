// src/templateUtils.ts
export function getTemplateContent(templateName: string | undefined) {
  const formattingGuide = `
== Formatting Guide
This guide offers basic formatting examples for writing FAQs. For detailed guidelines, click the Style Guide button in the activity bar.
[NOTE,role="blue"]
.Tip
****
* Use clear and concise language.
* Provide step-by-step instructions where applicable.
* Link to relevant resources.
* Use admonitions (NOTE, TIP, WARNING) to highlight important information.
****
.Bold Text
Use \`*bold text*\` or \`**bold text**\`.
Example: *This is bold text*.
.Italic Text
Use \`_italic text_\` or \`*italic text*\`.
Example: _This is italic text_.
.Links
Use \`link:https://example.com[Example Link]\` to create hyperlinks.
Example: link:https://example.com[Click here to visit].
.Images
Use \`image::path/to/image.jpg[alt="Image description"]\` to embed images. Always include descriptive alternative text.
Example: image::images/fedora-logo.png[alt="Fedora Logo"]
.Lists
* Unordered Lists: Use \`*\` for list items.
Example:
----
* Item 1
* Item 2
* Item 3
----
* Ordered Lists:  Use \`.\` for numbered list items.
Example:
----
. Step 1
. Step 2
. Step 3
----
.Colored Text (via roles)
Use \`[role="color"]Text\` to apply color. See the style guide for allowed colors.
Example: [role="red"]This is red text.[]
.Code Blocks
Use \`[source,language]\` and  \`----\` to create code blocks. Specify the language for syntax highlighting.
Example:
[source,bash]
----
function sayHello() {
  echo "Hello, World!";
}
----
.Tables
Use the following syntax for tables. Specify column widths.
Example:
[cols="1*,1*,2*"]
|===
|Header 1     |Header 2     |Header 3
|Row 1, Cell 1|Row 1, Cell 2|Row 1, Cell 3
|Row 2, Cell 1|Row 2, Cell 2|Row 2, Cell 3
|===
`;

  switch (templateName) {
    case "FAQ":
      return `== Frequently Asked Questions
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: General
:tags: tutorial, fedora
${formattingGuide}
[[question1]]
== Question 1: What is [Topic]?
[Provide a clear and concise explanation of the topic.  Assume the reader has minimal prior knowledge.  Use strong section titles (H2) for each question.]
[[question2]]
== Question 2: How do I [Action]?
[Provide step-by-step instructions, including code examples if necessary.  Use lists or tables for clarity.]
[[question3]]
== Question 3: Where can I find [Resource]?
[Link to the relevant resource and provide a brief description of its content and purpose.]
[[question4]]
== Question 4: What are the common issues with [Software/Process]?
[List common problems and their solutions.  Use sub-sections (H3) if needed for each issue.]
=== Issue 1
[Explain the issue and how to resolve it]
=== Issue 2
[Explain the issue and how to resolve it]
[[question5]]
== Question 5: How do I contribute to [Project/Document]?
[Provide contribution guidelines, including links to the relevant documentation and communication channels.]
`;

    case "Tutorial":
      return `== Tutorial: [Tutorial Title]
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: Tutorials
:tags: tutorial, fedora, [tags]
${formattingGuide}
== Introduction
This tutorial provides a step-by-step guide on [briefly describe the tutorial’s purpose]. By the end of this tutorial, you will have learned how to [describe the outcome or goal].  
[NOTE,role="blue"]
.Tip
****
* Follow the steps carefully.
* Copy and paste code examples where applicable.
* Refer to additional resources linked in each section if needed.
****
== Prerequisites
Before starting, ensure you have the following:
* **[Prerequisite 1]**: [Explain what it is and how to obtain it.]
* **[Prerequisite 2]**: [Explain what it is and how to obtain it.]
* **[Optional Prerequisite]**: [List any optional but recommended dependencies.]
== Step 1: [Action 1 - Example: Installing Dependencies]
[Provide a detailed explanation of this step, including commands and screenshots where necessary.]
Example:
[source,bash]
----
sudo dnf install package-name
----
[Explain what the command does and any expected output.]
== Step 2: [Action 2 - Example: Configuring the Environment]
[Provide a step-by-step guide, including any necessary configurations.]
Example:  
[source,ini]
----
# Configuration example
setting=value
----
[Explain what each configuration option does.]
== Step 3: [Action 3 - Example: Running the Application]
[Describe how to execute the application or complete the process.]
Example:
[source,bash]
----
./run-application
----
[Explain expected results and troubleshooting tips.]
== Troubleshooting & FAQs
[Address common issues that users may encounter.]
=== Issue 1: [Describe the issue]
[Explain how to resolve it.]
=== Issue 2: [Describe the issue]
[Explain how to resolve it.]
== Conclusion
Congratulations! You have successfully completed this tutorial on [Tutorial Topic]. You should now be able to [list what the user should be able to do].  
=== Next Steps
* [Link to advanced tutorials or related guides.]
* [Provide links to community discussions or additional support channels.]
For additional guidance, refer to the link:https://docs.fedoraproject.org/en-US/fedora-docs/style-guide/[Fedora Documentation Style Guide].
`;

    case "How-To Guide":
      return `== How-To Guide: [Guide Title]
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: How-To Guides
:tags: howto, fedora, [tags]
${formattingGuide}
== Introduction
This guide explains how to [briefly describe the task].  
It is intended for [describe the target audience] and assumes [mention any relevant assumptions about the reader's background knowledge].  
By the end of this guide, you will be able to:  
* [Outcome 1]
* [Outcome 2]
* [Outcome 3]
== Prerequisites
Before you begin, ensure you have the following:
* **[Prerequisite 1]**: [Explain its relevance and how to obtain it.]
* **[Prerequisite 2]**: [Explain its relevance and how to obtain it.]
* **[Software/Tool Requirements]**: [List any required tools, packages, or dependencies.]
== Steps
Follow these steps to complete the process:
. **Step 1: [Action 1]**  
[Provide detailed instructions, including commands, screenshots, or diagrams where necessary.]
. **Step 2: [Action 2]**  
[Describe what happens in this step and any expected output.]
. **Step 3: [Action 3]**  
[Continue with step-by-step explanations and code examples.]
. **Step 4: Verification**  
[Explain how to confirm that the process worked as expected.]
== Troubleshooting
If you encounter any issues, refer to these troubleshooting steps:
* **Issue 1**: [Describe the common problem and its solution.]
* **Issue 2**: [Describe another common issue and its fix.]
== Additional Resources
For further learning or alternative methods, check out these resources:
* [Link to related documentation]
* [Official Fedora guide]
* [Community forums or discussion boards]
== Conclusion
In this guide, you learned how to [summarize key takeaways].  
You can now [describe what the user can do next based on this knowledge].  
If you have feedback or improvements, feel free to contribute to the documentation. 🚀
`;

    case "Bug Report":
      return `== Bug Report: [Short Description of the Bug]
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: Bug Reports
:tags: bug, report, fedora, [tags]
${formattingGuide}
== Summary
[Provide a concise summary of the issue, including where it occurs and its impact.]
== Description of the Problem
[Describe the issue in detail, including when it happens, how often, and any error messages or visual artifacts. If possible, include relevant screenshots or videos.]
== Steps to Reproduce
To reproduce this bug, follow these steps:
. **Step 1:** [Describe the first action]
. **Step 2:** [Describe the second action]
. **Step 3:** [Describe the third action]
. **(Optional) Step 4:** [Add additional steps if necessary]
== Actual Results
[Explain what actually happens when following the steps above, including error messages, crashes, or unexpected behaviors.]
== Expected Results
[Describe what you expected to happen instead.]
== Impact Assessment
[Explain how this bug affects users or the system. Does it cause a crash, data loss, security vulnerability, etc.?]
== Workaround
[If there is a known workaround for the issue, describe it here.]
== Additional Information
[Provide any other information that may help identify or resolve the bug, such as logs, environment details, or related issues.]
`;

    case "CLI Reference":
      return `== CLI Reference for [Tool/Software Name]
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: Reference
:tags: cli, command, [tool]
${formattingGuide}
== Introduction
This section provides the complete reference for the command-line interface (CLI) of [Tool/Software Name]. The following commands are available to manage your installation and interact with the system.

== Command Syntax
Each command follows this syntax:
[source,bash]
----
$ [command] [options] [arguments]
----
Where:
* \`command\` is the name of the command to execute.
* \`options\` are the flags or parameters used to modify the command behavior.
* \`arguments\` are the target files, directories, or objects on which the command operates.

== Commands
[Provide a list of available commands, with descriptions, examples, and any required arguments.]

=== [Command 1]: [Command Name]
[Description of what this command does and its purpose.]
Example:
[source,bash]
----
$ [command] [option] [argument]
----
[Explain what happens when this command is executed.]

=== [Command 2]: [Command Name]
[Description of what this command does and its purpose.]
Example:
[source,bash]
----
$ [command] [option]
----
[Explain what happens when this command is executed.]
== FAQ
Address any frequently asked questions related to the CLI usage.
`;

    case "Contributor Guide":
      return `== Contributor Guide for [Project Name]
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: Contribution
:tags: contributing, community, project
${formattingGuide}
== Introduction
Thank you for your interest in contributing to [Project Name]! This guide provides all the information you need to get started with contributing to this project. Whether you're submitting a bug fix, writing documentation, or adding a new feature, we appreciate your help!

== Getting Started
To contribute to the project, you first need to:
. Fork the repository on GitHub.
. Clone your fork locally.
. Create a new branch for your work.
. Make your changes and commit them to your branch.
. Push your changes back to your fork and create a pull request.

== Code Style Guidelines
[Provide guidelines on coding standards, such as naming conventions, indentation, and best practices.]
== Reporting Bugs and Issues
If you encounter a bug or issue, please report it by following the [Bug Reporting Template].  
Be sure to include steps to reproduce, error logs, and screenshots if applicable.
== Thank You!
We appreciate your contributions! By contributing, you're helping make [Project Name] better. 🌟
`;

    default:
      return `== Default Template
:revnumber: 1.0
:revdate: ${new Date().toISOString().slice(0, 10)}
:category: General
:tags: template, [tags]

${formattingGuide}
== Introduction
Welcome to the [Project Name] documentation! This is the default template for all new contributions, providing structure and essential guidelines for submitting content.

Use this template to get started and make contributions, following the instructions for formatting, contributing, and reporting issues. 

Feel free to modify sections as needed to suit your specific topic.

== How to Use This Template
1. Customize the title and categories.
2. Follow the format provided for each section.
3. Use the formatting guide above for clear and consistent content.

Good luck, and thank you for contributing! 🎉
`;
  }
}
