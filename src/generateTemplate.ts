// src/generateTemplate.ts
import * as vscode from "vscode";
import { getTemplateContent } from "./templateUtils";
import asciidoctor from "asciidoctor";
const Asciidoctor = asciidoctor();

// Function to update the webview
const updateWebview = (panel: vscode.WebviewPanel, html: string) => {
  panel.webview.html = `
    <!DOCTYPE html>
        <html>
          <head>
              <meta http-equiv="Content-Security-Policy" content="
                default-src 'none';
                style-src ${panel.webview.cspSource} 'unsafe-inline';
                img-src ${panel.webview.cspSource} data:;
                script-src 'none';
                frame-src ${panel.webview.cspSource};
                object-src 'none';
              ">
          </head>
          <body>
              ${html}
          </body>
          </html>
    `;
};

export function generateTemplate() {
  return vscode.commands.registerCommand(
    "writefedora.generateTemplate",
    async () => {
      const templates = [
        "FAQ",
        "Tutorial",
        "How-To Guide",
        "Bug Report",
        "CLI Reference",
        "User Guide",
        "Contributor Guide",
      ];
      const selectedTemplate = await vscode.window.showQuickPick(templates, {
        placeHolder: "Select a template to generate",
      });

      if (!selectedTemplate) return;

      const fileName = await vscode.window.showInputBox({
        prompt: "Enter the file name (without .adoc extension)",
      });
      
      if (!fileName) return;

      const templateContent = getTemplateContent(selectedTemplate);
      if (!templateContent) {
        vscode.window.showErrorMessage("Failed to load template.");
        return;
      }

      if (
        !vscode.workspace.workspaceFolders ||
        vscode.workspace.workspaceFolders.length === 0
      ) {
        vscode.window.showErrorMessage("No workspace folder open");
        return;
      }

      try {
        const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const filePath = `${workspaceFolder}/${fileName}.adoc`;
        const fs = require("fs");

        fs.writeFile(filePath, templateContent, (err: any) => {
          if (err) {
            vscode.window.showErrorMessage("Failed to create .adoc file.");
            return;
          }

          vscode.window.showInformationMessage(
            `File ${fileName}.adoc created successfully!`
          );
        });

        const html = Asciidoctor.convert(templateContent, {
          safe: "safe",
          attributes: { showtitle: true },
          backend: "html5",
          to_file: false,
        }) as string;

        const panel = vscode.window.createWebviewPanel(
          "asciidocPreview",
          `${fileName} Preview`,
          vscode.ViewColumn.Beside,
          {
            enableScripts: true,
            retainContextWhenHidden: true,
          }
        );

        updateWebview(panel, html);

        vscode.workspace.onDidChangeTextDocument((event) => {
          const activeDocument = vscode.window.activeTextEditor?.document;
          if (
            activeDocument &&
            event.document.uri.fsPath === activeDocument.uri.fsPath
          ) {
            const updatedHtml = Asciidoctor.convert(event.document.getText(), {
              safe: "safe",
              attributes: { showtitle: true },
              backend: "html5",
              to_file: false,
            }) as string;
            updateWebview(panel, updatedHtml);
          }
        });

        panel.onDidDispose(() => console.log("Preview panel disposed"));
        panel.reveal(vscode.ViewColumn.Beside);
      } catch (e) {
        console.error(
          "Error during Asciidoctor conversion or file creation:",
          e
        );
        vscode.window.showErrorMessage("Error processing AsciiDoc.");
      }
    }
  );
}
