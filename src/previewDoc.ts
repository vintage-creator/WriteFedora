import * as vscode from "vscode";
import asciidoctor from "asciidoctor";
const Asciidoctor = asciidoctor();

export function previewDoc() {
  return vscode.commands.registerCommand("writefedora.previewDoc", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active editor found.");
      return;
    }

    const document = editor.document;
    if (!document.fileName.endsWith(".adoc")) {
      vscode.window.showErrorMessage("The active file is not an AsciiDoc (.adoc) file.");
      return;
    }

    try {
      const htmlContent = Asciidoctor.convert(document.getText(), {
        safe: "safe",
        attributes: { showtitle: true },
        backend: "html5",
        to_file: false,
      });

      const panel = vscode.window.createWebviewPanel(
        "asciidocPreview",
        `${document.fileName} Preview`,
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        }
      );

      panel.webview.html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
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
          ${htmlContent}
        </body>
        </html>
      `;

      vscode.workspace.onDidChangeTextDocument((event) => {
        if (event.document === document) {
          const updatedHtml = Asciidoctor.convert(event.document.getText(), {
            safe: "safe",
            attributes: { showtitle: true },
            backend: "html5",
            to_file: false,
          });

          panel.webview.html = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
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
              ${updatedHtml}
            </body>
            </html>
          `;
        }
      });

      panel.onDidDispose(() => {
        console.log("AsciiDoc preview closed.");
      });
    } catch (error) {
      console.error("Error processing AsciiDoc preview:", error);
      vscode.window.showErrorMessage("Failed to generate AsciiDoc preview.");
    }
  });
}
