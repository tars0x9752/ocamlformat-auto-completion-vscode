import {
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  Position,
  TextDocument,
} from 'vscode'

type OCamlFormatOption = {
  key: string
  values: string[]
  documentation: string
}

const options: OCamlFormatOption[] = [
  {
    key: 'align-cases',
    values: ['true', 'false'],
    documentation: 'Align match/try cases vertically. The flag is unset by default.',
  },
  {
    key: 'align-constructors-decl',
    values: ['true', 'false'],
    documentation: 'Align type declarations vertically. The flag is unset by default.',
  },
  {
    key: 'align-variants-decl',
    values: ['true', 'false'],
    documentation: 'Align type variants declarations vertically. The flag is unset by default.',
  },
]

const hasEq = (lineText: string) => {
  return lineText.includes('=')
}

const hasOptionKey = (lineText: string) => {
  return hasEq(lineText)
}

const getOptionKey = (lineText: string) => {
  const rawKeyAndValue = lineText.split('=')

  const [rawKey] = rawKeyAndValue

  const key = rawKey.trim().toLowerCase()

  return key
}

const getSuggestedValues = (key: string) => {
  const mathedOption = options.find(option => option.key === key)

  return mathedOption?.values ?? []
}

const getValueCompletionItems = (values: string[]) => {
  const valuesSortOrder = {
    true: '1',
    false: '2',
    unset: '9',
  }

  return values.map(value => {
    const completionItem = new CompletionItem(value, CompletionItemKind.Value)

    completionItem.sortText = valuesSortOrder[value as keyof typeof valuesSortOrder] || '3' + value

    return completionItem
  })
}

const getKeyCompletionItems = (textOfEntireLine: string): CompletionItem[] => {
  return options.map(option => {
    const completionItem = new CompletionItem(option.key, CompletionItemKind.Property)

    completionItem.documentation = option.documentation

    return completionItem
  })
}

const autoCompleteOptionValues = (textOfLineUpToCursor: string): CompletionItem[] => {
  const key = getOptionKey(textOfLineUpToCursor)

  const suggestedOValues = getSuggestedValues(key)

  return getValueCompletionItems(suggestedOValues)
}

const autoCompleteOptionKeys = (textOfEntireLine: string): CompletionItem[] => {
  return getKeyCompletionItems(textOfEntireLine)
}

export const completionProvider: CompletionItemProvider = {
  provideCompletionItems: (document: TextDocument, position: Position) => {
    const entierLineText = document.getText(document.lineAt(position.line).range)
    const lineTextUpToCursor = entierLineText.substring(0, position.character)

    if (hasOptionKey(lineTextUpToCursor)) {
      return autoCompleteOptionValues(lineTextUpToCursor)
    } else {
      return autoCompleteOptionKeys(entierLineText)
    }
  },

  resolveCompletionItem: (item: CompletionItem) => {
    return item
  },
}
