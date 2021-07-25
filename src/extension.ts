import { ExtensionContext, workspace } from 'vscode'
import { Trace } from 'vscode-jsonrpc'

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from 'vscode-languageclient/node'

let client: LanguageClient

export function activate(context: ExtensionContext) {
  const lspServerCommand = context.asAbsolutePath('main.exe')

  const serverOptions: ServerOptions = {
    run: { command: lspServerCommand, transport: TransportKind.stdio },
    debug: { command: lspServerCommand, transport: TransportKind.stdio },
  }

  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      {
        pattern: '**/*.ocamlformat',
        scheme: 'file',
      },
    ],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher('**/*.ocamlformat'),
    },
  }

  client = new LanguageClient(
    'ocamlformatConfigLSPClient',
    'ocamlformatConfigLSPClient',
    serverOptions,
    clientOptions
  )

  client.trace = Trace.Verbose

  client.start()

  return
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined
  }
  return client.stop()
}
