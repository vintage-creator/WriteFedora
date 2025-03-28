// src/snippetsProvider.ts
import * as vscode from "vscode";

export function registerSnippetsProvider(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider("asciidoc", {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const wordRange = document.getWordRangeAtPosition(position, /f\w*/);
        const prefix = document.getText(wordRange);

        if (!prefix.startsWith("f")) {
            return undefined;
          }

        const snippets = [
          {
            label: "fcode",
            insertText: "[source, ${1:language}]\n----\n${2:code}\n----",
            description: "WriteFedora Code Block",
          },
          {
            label: "ftable",
            insertText:
              '[cols="${1:1*,1*}"]\n|===\n| ${2:Header 1} | ${3:Header 2}\n| ${4:Data 1} | ${5:Data 2}\n|===',
            description: "WriteFedora Table",
          },
          {
            label: "fnote",
            insertText: "NOTE: ${1:Your note here}",
            description: "WriteFedora Note Admonition",
          },
          {
            label: "ftip",
            insertText: "TIP: ${1:Pro tip...}",
            description: "WriteFedora Tip Admonition",
          },
          {
            label: "fimportant",
            insertText: "IMPORTANT: ${1:Don't forget...}",
            description: "WriteFedora Important Admonition",
          },
          {
            label: "fwarn",
            insertText: "WARNING: ${1:Be cautious...}",
            description: "WriteFedora Warning Admonition",
          },
          {
            label: "flink",
            insertText: "link:${1:https://example.com}[${2:Link Text}]",
            description: "WriteFedora Link Template",
          },
          {
            label: "fimage",
            insertText:
              'image::${1:path/to/image.jpg}[alt="${2:Image description}"]',
            description: "WriteFedora Image Embedding",
          },
          {
            label: "fordered",
            insertText:
              ". ${1:First item}\n. ${2:Second item}\n. ${3:Third item}",
            description: "WriteFedora Ordered List",
          },
          {
            label: "funordered",
            insertText:
              "* ${1:First item}\n* ${2:Second item}\n* ${3:Third item}",
            description: "WriteFedora Unordered List",
          },
          {
            label: "ftableheader",
            insertText:
              '[cols="1*, 1*"]\n|===\n| ${1:Header 1} | ${2:Header 2}\n|===\n',
            description: "WriteFedora Table Header",
          },
          {
            label: "fanchor",
            insertText: "[[${1:anchor_name}]] ${2:Anchor Description}",
            description: "WriteFedora Anchor Link",
          },
          {
            label: "fcodeinline",
            insertText: "`${1:inline code}`",
            description: "WriteFedora Inline Code",
          },
          {
            label: "fblockquote",
            insertText: "----\n${1:Your quoted text}\n----",
            description: "WriteFedora Blockquote",
          },
        ];

        return snippets
          .filter((snippet) => snippet.label.startsWith(prefix))
          .map((snippet) => {
            const item = new vscode.CompletionItem(
              snippet.label,
              vscode.CompletionItemKind.Snippet
            );

            item.insertText = new vscode.SnippetString(snippet.insertText);
            item.detail = "WriteFedora Snippet";
            item.documentation = new vscode.MarkdownString()
              .appendMarkdown(snippet.description)
              .appendCodeblock(snippet.insertText, "asciidoc");
            return item;
          });
      },
    })
  );
}
