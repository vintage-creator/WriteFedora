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
Use *bold text* or **bold text**. Example: *This is bold text*.
  
.Italic Text
Use _italic text_ or *italic text*. Example: _This is italic text_.
  
.Links
Use link:https://example.com[Example Link] to create hyperlinks. Example: link:https://example.com[Click here to visit] Fedora.
  
.Images
Use image::path/to/image.jpg[alt="Image description"] to embed images. Always include descriptive alternative text. Example: image::images/fedora-logo.png[alt="Fedora Logo"]
  
.Lists
Unordered Lists: Use * for list items.

Example: 

* Item 1 
* Item 2
* Item 3

----  
Ordered Lists:  Use . for numbered list items.
  
Example:
----
. Step 1
. Step 2
. Step 3

  
.Colored Text (via roles)
Use [role="color"]Text to apply color. See the style guide for allowed colors.
  
Example: [role=red]#This is red text.# (Make sure to create a CSS file and define your colors.)
  
.Code Blocks
Use [source,language] and  ---- to create code blocks. Specify the language for syntax highlighting.
  
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

|Row 1, Cell 1 |Row 1, Cell 2 |Row 1, Cell 3
|Row 2, Cell 1 |Row 2, Cell 2 |Row 2, Cell 3
|===`
;

switch (templateName) {
  case "FAQ":
    return `
== Frequently Asked Questions
  
  :revnumber: 1.0
  :revdate: ${new Date().toISOString().slice(0, 10)}
  :category: General
  :tags: tutorial, fedora
  
${formattingGuide}
  
[[question1]]
== Question 1: What is [Topic]?
  
  [Provide a clear and concise explanation of the topic.  Assume the reader has minimal prior knowledge.  Use strong section titles for each question.]
  
[[question2]]
== Question 2: How do I [Action]?
  
  [Provide step-by-step instructions, including code examples if necessary.  Use lists or tables for clarity.]
  
[[question3]]
== Question 3: Where can I find [Resource]?
  
  [Link to the relevant resource and provide a brief description of its content and purpose.]
  
[[question4]]
== Question 4: What are the common issues with [Software/Process]?
  
  [List common problems and their solutions. Use sub-sections if needed for each issue.]

=== Issue 1
----
  [Explain the issue and how to resolve it]
----
=== Issue 2
  [Explain the issue and how to resolve it]
  
[[question5]]
== Question 5: How do I contribute to [Project/Document]?
  
  [Provide contribution guidelines, including links to the relevant documentation and communication channels.]
`
;

    case "Tutorial":
      return `
== Tutorial: [Tutorial Title]
  
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
`
;

case "How-To Guide":
  return `
== How-To Guide: [Guide Title]

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
`
;

    case "Bug Report":
      return `
== Bug Report: [Short Description of the Bug]
  
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
  
  [Explain how this bug affects users or the system. Does it cause a crash, data loss, performance issues, or incorrect behavior?]
  
== Workarounds
  
  [If there are any known workarounds, document them here. If none exist, state that.]
  
== Logs and System Information
  
Please provide the following details to help diagnose the issue:
  
* **Operating System:** [e.g., Fedora 38, Windows 11]
* **Kernel Version:** [e.g., 6.4.10-300.fc38.x86_64]
* **Software/Application Version:** [e.g., GNOME 44, Firefox 120]
* **Logs:** [Paste relevant logs or provide links to log files.]
* **Hardware Information:** [If applicable, describe CPU, RAM, GPU, or any other relevant specs.]
  
== Additional Notes
  
  [Include any additional observations, related bug reports, or other contextual information that could help resolve this issue.]
  
== References
  
* [Link to related bug reports]
* [Link to relevant documentation]
* [Link to discussions in Fedora forums]
  
== Next Steps
  
  [If you're a contributor, describe what actions need to be taken next, such as debugging steps or areas to investigate.]
`
;

    case "CLI Reference":
      return `
== Command: [Command Name]
  
  :revnumber: 1.0
  :revdate: ${new Date().toISOString().slice(0, 10)}
  :category: CLI Reference
  :tags: cli, reference, fedora, [tags]
  
${formattingGuide}
  
== Synopsis
  
  [command] [options] [arguments]  
== Description
  
  [Provide a detailed description of the command, including its purpose, functionality, and any context about when or why it is used. Discuss its role in the overall system or workflow.]
  
== Options
  
The following are the options available for this command:
  
* -[option]: [Describe the option, its syntax, and its intended use. Include default values or behavior, if applicable.]
* --[long-option]: [Describe the long option, its syntax, and its intended use.]
* -[flag]: [Describe a flag, its effect, and any important details like whether it can be combined with other options.]
  
== Arguments
  
Here are the arguments that can be passed to the command:
  
* [argument1]: [Describe the first argument, including any constraints or formatting rules.]
* [argument2]: [Describe the second argument, if applicable.]
* [argumentN]: [Describe any additional arguments and how they interact with options.]
  
== Examples
  
Here are some examples of how to use this command:
  
Example 1:
  [command] --[option] [argument]
  [Explain what this example does and the expected result.]
  
Example 2:
  [command] -[short-option] [argument]
  [Explain what this example does and the expected result.]
  
Example 3:
  [command] [options] [arguments]
  [Provide an example that demonstrates multiple options or a more complex use case.]
  
== Return Codes
  
The following are the possible return codes for this command:
  
*  : [Description of what a return code of 0 signifies.]
* : [Description of what a return code of 1 signifies.]
* [other return codes]: [Description of other possible return codes, if applicable.]
  
== See Also
  
* [Related command 1]: [Brief description and how it's related to this command.]
* [Related command 2]: [Brief description and how it's related to this command.]
  
== Additional Notes
  
  [Include any additional context, limitations, or troubleshooting advice related to the command.]
`
;
    case "User Guide":
      return `
== User Guide: [Guide Title]
  
  :revnumber: 1.0
  :revdate: ${new Date().toISOString().slice(0, 10)}
  :category: User Guides
  :tags: user, guide, fedora, [tags]

${formattingGuide}
  
== Table of Contents
----
toc::
----
== Introduction
  
This guide provides [overview of the guide's purpose, target audience, and how it will help users]. The goal is to equip you with the necessary knowledge to [what the user can achieve or do by the end of the guide]. Whether you're new to [subject] or looking to improve your skills, this guide will walk you through all the essential steps.
  
== Chapter 1: [Chapter Title 1]
  
In this chapter, we will cover [overview of Chapter 1's content]. This includes [specific topics, tools, or skills covered in this chapter]. Make sure you understand these concepts as they are fundamental to [next steps or concepts introduced in the guide].
  
=== Section 1.1: [Section Title]
  
  [Detailed explanation of the content for Section 1.1. Provide step-by-step instructions or information with appropriate code examples, screenshots, or diagrams.]
  
=== Section 1.2: [Section Title]
  
  [Detailed explanation of the content for Section 1.2. Provide additional context, examples, or exercises that expand on the content.]
  
== Chapter 2: [Chapter Title 2]
  
  Chapter 2 focuses on [overview of Chapter 2's content]. By the end of this chapter, you should be comfortable with [skills or concepts covered in Chapter 2].
  
=== Section 2.1: [Section Title]
  
  [Step-by-step guide or description of content covered in Section 2.1. Use code snippets, screenshots, and clarifications where necessary.]
  
=== Section 2.2: [Section Title]
  
  [Detailed explanation of Section 2.2. Offer examples or deeper insight into the topics covered in this section.]
  
== Chapter 3: [Chapter Title 3]
  
This chapter will help you [overview of Chapter 3]. The focus here will be on [specific skills, concepts, or tools introduced in this chapter].
  
=== Section 3.1: [Section Title]
  
  [Detailed content of Section 3.1. Provide instructions, examples, and any relevant clarifications.]
  
=== Section 3.2: [Section Title]
  
  [Content for Section 3.2. Continue breaking down concepts and providing examples to support understanding.]
  
== Conclusion
  
Congratulations! You’ve completed the [Guide Title] User Guide. By now, you should have a good understanding of [key takeaways or skills learned in the guide]. If you have any questions or want to explore further, we recommend checking out [related resources or next steps].
  
== Additional Resources
  
* [Resource 1]: [Description of resource and why it's useful.]
* [Resource 2]: [Another resource and its relevance.]
  
== Frequently Asked Questions (FAQ)
  
If you have any questions, check out the FAQ section for quick answers to common issues:
  
* [FAQ Question 1]: [Answer or solution.]
* [FAQ Question 2]: [Answer or solution.]
  
== Feedback
  
We value your feedback! If you have any suggestions for improvements or questions about this guide, feel free to reach out to us at [contact information or method of feedback collection].
`
;

    case "Contributor Guide":
      return `
== Contributor Guide: My Awesome Project
    
  :revnumber: 1.0
  :revdate: ${new Date().toISOString().slice(0, 10)}
  :category: Contributor Guides
  :tags: contributors, open-source, help
      
${formattingGuide}
      
== Introduction
      
Welcome to the "My Awesome Project" Contributor Guide! This guide is designed to help you get started with contributing to the project. Whether you’re an experienced developer or new to open-source contributions, we want to make it as easy as possible for you to get involved. 
      
In this guide, you’ll find everything you need to know about setting up your development environment, following best practices, and submitting your contributions.
      
== Getting Started
      
Before you start contributing, you’ll need to set up your development environment. Follow these steps to get up and running:
      
1. **Clone the repository**: 
* git clone https://github.com/my-awesome-project        
* This will download the project files to your local machine.
        
2. **Install dependencies**: 
* Run npm install to install the project’s dependencies.
* Make sure you have Node.js installed (version 14 or higher).
        
3. **Set up local environment**:
* Set up your .env file as follows:
* DATABASE_URL=your-database-url          
* SECRET_KEY=your-secret-key      
4. **Run the project locally**: 
* To start the local development server, use the following command:
[source,bash]
  npm start      
5. **Tests**: 
* Run npm test to make sure the setup is working as expected.
      
Once you have your environment set up, you can start contributing!
      
== Style Guidelines
      
We maintain strict guidelines to ensure that the project remains consistent, readable, and maintainable. Please follow these guidelines when contributing:
      
### Code Style
      
* **Language-specific style guides**:
* For JavaScript, follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
        
* **Formatting**:
* Use Prettier to automatically format your code.
* Indentation should be spaces, using 2 spaces per indentation level.
      
### Documentation Guidelines
      
* Ensure that your code is well-documented. Include:
* Clear and concise docstrings/comments for functions, classes, and modules.
* Instructions for how to use new features, along with examples, if applicable.
* Any relevant details on edge cases or special behavior.
      
### Commit Messages
      
* Use the following format for commit messages:
* [Type] [Short Description of the Change]
* Example: Fix: Resolve issue with user login        
* Include a detailed description of what was changed and why in the body of the commit message.
      
* Avoid committing unnecessary files, such as build artifacts or IDE-specific configurations.
      
== Contribution Workflow
      
We use a standard GitHub workflow for contributing. Please follow these steps for submitting your contributions:
      
1. **Fork the repository**: 
* Fork the repository to your GitHub account by clicking the “Fork” button on the top right of the repository page.
      
2. **Create a new branch**:
* Always create a new branch for your work. For example:
* git checkout -b feature/add-new-feature        
3. **Make your changes**:
* Work on your changes and ensure they follow the style guidelines outlined earlier.
        
4. **Test your changes**:
* Run tests locally and ensure that all tests pass before submitting your changes.
        
5. **Commit your changes**:
* Commit your changes following the commit message guidelines.
      
6. **Push your branch**:
* Push your branch to your forked repository:
* git push origin feature/add-new-feature        
7. **Submit a pull request (PR)**:
* Go to the original repository and create a pull request from your fork.
* Provide a clear description of your changes, and if applicable, include references to related issues.
      
8. **Review and Feedback**:
* Your pull request will be reviewed by the maintainers. They may ask for changes or approve your changes.
* Be sure to address any feedback you receive and update the pull request accordingly.
      
9. **Merge**:
* Once your pull request is approved, it will be merged into the main branch.
      
== Additional Information
      
* **Code of Conduct**: We expect all contributors to adhere to our [Code of Conduct] to foster a welcoming and inclusive environment.
* **License**: All contributions must comply with the project's [MIT License].
      
== Frequently Asked Questions (FAQ)
      
If you have any questions, check out the FAQ section for quick answers to common issues:
      
* **How do I contribute to the project?**: Follow the steps outlined in this guide to get started.
* **How do I run the tests?**: Run 
pm test after setting up your environment.
      
== Feedback
      
We welcome your feedback and contributions! If you encounter any issues or have suggestions for improvement, please reach out to us at [contact@my-awesome-project.org].
`
;

    default:
      return `
== Default Template: [Document Title]
      
  :revnumber: 1.0
  :revdate: ${new Date().toISOString().slice(0, 10)}
  :category: Uncategorized
  :tags: default, open-source, [tags]

${formattingGuide}
      
== Introduction
      
  [Provide an overview of the document.]
      
== Section 1: [Section Title 1]
      
  [Detailed content for Section 1.]
      
== Section 2: [Section Title 2]
      
  Detailed content for Section 2.]
      
== Conclusion
      
  [Summarize the document and provide next steps.]
`
;
  }
}
