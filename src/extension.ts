
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const prettier = require('prettier');


/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context: vscode.ExtensionContext) {
  console.log('Starting Prettier for Java VSCode extension from Hyperproof.')
  const disposable = vscode.languages.registerDocumentFormattingEditProvider(
    "java",
    {
      async provideDocumentFormattingEdits(document) {
        const text = document.getText();
        const options = await prettier.resolveConfig(document.fileName);
        const formattedText = prettier.format(text, {
          ...options,
          parser: "java"
        });

        const textEditor = vscode.window.activeTextEditor;
        if (textEditor) {
          const firstLine = textEditor.document.lineAt(0);
          const lastLine = textEditor.document.lineAt(
            textEditor.document.lineCount - 1
          );
          let textRange = new vscode.Range(
            firstLine.range.start,
            lastLine.range.end
          );

          return [vscode.TextEdit.replace(textRange, formattedText)];
        }
        return [];
      },
    }
  );

  context.subscriptions.push(disposable);
}
