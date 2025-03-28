import * as vscode from "vscode";
import { generateTemplate } from "./generateTemplate";
import { previewDoc } from "./previewDoc";
import { exportHTML } from "./exportHTML";
import {
  openStyleGuide,
  openValeGuide,
  openAsciiDocExtension,
} from "./openGuides";
import { registerSnippetsProvider } from "./snippetsProvider";
import { WriteFedoraViewProvider } from "./writeFedoraViewProvider";

export function activate(context: vscode.ExtensionContext) {
  console.log("WriteFedora extension is now active!");

  vscode.commands
    .executeCommand("workbench.view.extension.writefedora")
    .then(() => console.log("WriteFedora view activated"));

  context.subscriptions.push(
    generateTemplate(),
    openStyleGuide(),
    openValeGuide(),
    openAsciiDocExtension(),
    previewDoc(),
    exportHTML()
  );

  // Register the view provider immediately upon activation
  const writeFedoraViewProvider = new WriteFedoraViewProvider();
  context.subscriptions.push(
    vscode.window.createTreeView("writefedoraButtons", {
      treeDataProvider: writeFedoraViewProvider,
      showCollapseAll: false,
    })
  );

  registerSnippetsProvider(context);
}

export function deactivate() {
  console.log("WriteFedora extension is now deactivated.");
}
