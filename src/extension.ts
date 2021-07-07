import { DocumentSelector, ExtensionContext, languages } from 'vscode'
import { completionProvider } from './ocamlformat-completion-provider'

export function activate(ctx: ExtensionContext) {
  const ocamlformatConfigSelector: DocumentSelector = {
    language: 'ocamlformat',
    pattern: '**/.ocamlformat',
    scheme: 'file',
  }

  languages.registerCompletionItemProvider(ocamlformatConfigSelector, completionProvider)

  return
}
