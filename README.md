# Java prettier formatter

A VSCode extension enabling *fast* format-on-save for Java sources using `prettier=^2.7` and `prettier-plugin-java=^1.6`.

## Installation

Install via the VS Code marketplace.

## Usage

For one time use:-

* Open the Command Palette (ctrl+shift+p).
* Select 'Format Document With...' or 'Format Document' if this formatter is the only Java formatter installed.
* Select 'Java prettier formatter'.

To set as default formatter for Java files:-

* Open the Command Palette (ctrl+shift+p).
* Select 'Preferences: Configure Language Specific Settings'.
* Select 'Java'.
* Add the following line under the `[java]` section:

```
"editor.defaultFormatter": "hp.vscode-ext-prettier-java"
```

## Configuration

Place a `.prettierrc` in your workspace.
(Or alternatively an appropriate `.editorconfig`.)
Changes require restart to take effect.

## Summary of deploy process

* `npm i -g vsce`
* `vsce package`
* `vsce publish`

## Acknowledgments

This plugin is based on [`mwpb.java-prettier-formatter`](https://github.com/mwpb/java-prettier-formatter). We updated the underlying tools, updated all dependencies to their latest compatible versions, updated the VSCode plugin module, and converted the project to TypeScript. Big thanks to them and and the projects below!

* [Prettier](https://prettier.io/) - Formatter.
* [Prettier plugin Java](https://github.com/jhipster/prettier-java/tree/master/packages/prettier-plugin-java) - Java specific formatting.
