import * as vscode from "vscode";
import * as path from "path";
import asciidoctor from "asciidoctor";
const Asciidoctor = asciidoctor();

export function exportHTML() {
  return vscode.commands.registerCommand("writefedora.exportHTML", async () => {
    const doc = vscode.window.activeTextEditor?.document;
    if (doc && doc?.languageId === "asciidoc") {
      try {
        const html = Asciidoctor.convert(doc.getText(), {
          safe: "safe",
          attributes: { showtitle: true },
          backend: "html5",
        });

        const htmlUri = vscode.Uri.file(doc.uri.fsPath.replace(/\.adoc$/i, ".html"));
        const filename = path.basename(htmlUri.fsPath);
        await vscode.workspace.fs.writeFile(htmlUri, Buffer.from(html as string, "utf-8"));
        vscode.window.showInformationMessage(`Exported ${filename} successfully.`);
      } catch (error) {
        vscode.window.showErrorMessage(`HTML export failed: ${error}`);
      }
    } else if (!doc) {
      vscode.window.showErrorMessage("No active AsciiDoc editor found.");
    }
  });
}
