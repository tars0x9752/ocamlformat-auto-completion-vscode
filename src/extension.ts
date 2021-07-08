import { DocumentSelector, ExtensionContext, languages } from 'vscode'
import { completionProvider } from './completion-provider'

export function activate() {
  const ocamlformatConfigSelector: DocumentSelector = {
    language: 'ocaml.ocamlformat',
    pattern: '**/.ocamlformat',
    scheme: 'file',
  }

  languages.registerCompletionItemProvider(ocamlformatConfigSelector, completionProvider)

  return
}
