// src/writeFedoraViewProvider.ts
import * as vscode from "vscode";

export class WriteFedoraViewProvider
  implements vscode.TreeDataProvider<vscode.TreeItem>
{
  private _onDidChangeTreeData = new vscode.EventEmitter<void>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
    if (element) {
      return this.getDependencyItems(element.label as string);
    }

    return Promise.resolve([
      // Existing main items
      this.createCommandItem(
        "📄 Generate Template",
        "writefedora.generateTemplate",
        "file-code"
      ),
      this.createCommandItem(
        "👁️ Preview Document",
        "writefedora.previewDoc",
        "preview"
      ),
      this.createCommandItem(
        "🔼 Export HTML",
        "writefedora.exportHTML",
        "export"
      ),
      this.createCommandItem(
        "📘 Style Guide",
        "writefedora.openStyleGuide",
        "book"
      ),

      // Dependencies section
      this.createSectionHeader(
        "📦 Required Extensions",
        "External dependencies for full functionality"
      ),
      this.createDependencyItem(
        "AsciiDoc Support",
        "asciidoctor.asciidoctor-vscode"
      ),
      this.createDependencyItem("Vale Linter", "ChrisChinchilla.vale-vscode"),
    ]);
  }

  private getDependencyItems(
    dependencyName: string
  ): Thenable<vscode.TreeItem[]> {
    const extensionId =
      dependencyName === "Vale Linter"
        ? "ChrisChinchilla.vale-vscode"
        : "asciidoctor.asciidoctor-vscode";

    const isInstalled = Boolean(vscode.extensions.getExtension(extensionId));
    const command =
      dependencyName === "Vale Linter"
        ? "writefedora.openValeGuide"
        : "writefedora.openAsciiDocExtension";

    const items: vscode.TreeItem[] = [
      this.createStatusItem(
        isInstalled ? "✅ Installed" : "❌ Not Installed",
        isInstalled ? "Extension is installed" : "Click to install extension",
        isInstalled ? "check" : "warning"
      ),
    ];

    if (!isInstalled) {
      items.push(
        this.createCommandItem(
          "⬇️ Install Extension",
          command,
          "cloud-download"
        )
      );
    }

    return Promise.resolve(items);
  }

  private createSectionHeader(label: string, tooltip: string): vscode.TreeItem {
    const item = new vscode.TreeItem(
      label,
      vscode.TreeItemCollapsibleState.Collapsed
    );
    item.tooltip = tooltip;
    item.iconPath = new vscode.ThemeIcon("package");
    item.contextValue = "dependenciesHeader";
    return item;
  }

  private createDependencyItem(
    label: string,
    extensionId: string
  ): vscode.TreeItem {
    const isInstalled = Boolean(vscode.extensions.getExtension(extensionId));
    const item = new vscode.TreeItem(
      label,
      vscode.TreeItemCollapsibleState.Collapsed
    );
    item.iconPath = new vscode.ThemeIcon("extensions");
    item.description = isInstalled ? "Installed" : "Not installed";
    return item;
  }

  private createStatusItem(
    label: string,
    tooltip: string,
    icon: string
  ): vscode.TreeItem {
    const item = new vscode.TreeItem(
      label,
      vscode.TreeItemCollapsibleState.None
    );
    item.iconPath = new vscode.ThemeIcon(icon);
    item.tooltip = this.getTooltip(label);
    return item;
  }

  private createCommandItem(
    label: string,
    command: string,
    icon: string,
    args?: any
  ): vscode.TreeItem {
    const item = new vscode.TreeItem(
      label,
      vscode.TreeItemCollapsibleState.None
    );
    item.command = {
      command: command,
      title: label,
      arguments: args ? [args.startsWith("@") ? args : `@ext:${args}`] : [],
    };
    item.iconPath = new vscode.ThemeIcon(icon);
    return item;
  }

  private getTooltip(label: string): string {
    const tooltips: { [key: string]: string } = {
      "📄 Generate Template":
        "Create new documentation template (FAQ, Tutorial, etc.)",
      "👁️ Preview Document": "Live preview of AsciiDoc content",
      "🔼 Export HTML": "Generate HTML version of current document",
      "📘 Style Guide": "Open Fedora documentation style guidelines",
      "✅ Vale Guide": "Access Vale linter documentation",
      "🔌 AsciiDoc Extension": "Manage AsciiDoc extension settings",
    };
    return tooltips[label] || "";
  }
}
