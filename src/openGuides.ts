// src/openGuides.ts
import * as vscode from "vscode";

export function openStyleGuide() {
  return vscode.commands.registerCommand("writefedora.openStyleGuide", () => {
    vscode.env.openExternal(
      vscode.Uri.parse(
        "https://docs.fedoraproject.org/en-US/fedora-docs/contributing-docs/style-guide/"
      )
    );
  });
}

export function openValeGuide() {
  return vscode.commands.registerCommand("writefedora.openValeGuide", () => {
    vscode.commands.executeCommand(
      "workbench.extensions.search",
      "@id:ChrisChinchilla.vale-vscode"
    );
  });
}

export function openAsciiDocExtension() {
  return vscode.commands.registerCommand("writefedora.openAsciiDocExtension", () => {
    vscode.commands.executeCommand(
      "workbench.extensions.search",
      "Asciidoctor"
    );
  });
}
