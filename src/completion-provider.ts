import {
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  Position,
  TextDocument,
} from 'vscode'
import { OPTIONS_V0_18_0 as options } from './options/v0_18_0'

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

const getValueCompletionItems = (values: string[], documentation: string | undefined) => {
  const valuesSortOrder = {
    true: '1',
    false: '2',
  }

  return values.map(value => {
    const completionItem = new CompletionItem(value, CompletionItemKind.Value)

    completionItem.sortText = valuesSortOrder[value as keyof typeof valuesSortOrder] || `3${value}`

    completionItem.documentation = documentation

    return completionItem
  })
}

const getKeyCompletionItems = (): CompletionItem[] => {
  return options.map(option => {
    const completionItem = new CompletionItem(option.key, CompletionItemKind.Property)

    completionItem.documentation = option.documentation

    return completionItem
  })
}

const autoCompleteOptionValues = (textOfLineUpToCursor: string): CompletionItem[] => {
  const key = getOptionKey(textOfLineUpToCursor)

  const suggestedOValues = getSuggestedValues(key)

  const documentation = options.find(option => option.key === key)?.documentation

  return getValueCompletionItems(suggestedOValues, documentation)
}

const autoCompleteOptionKeys = (): CompletionItem[] => {
  return getKeyCompletionItems()
}

export const completionProvider: CompletionItemProvider = {
  provideCompletionItems: (document: TextDocument, position: Position) => {
    const entierLineText = document.getText(document.lineAt(position.line).range)
    const lineTextUpToCursor = entierLineText.substring(0, position.character)

    if (hasOptionKey(lineTextUpToCursor)) {
      return autoCompleteOptionValues(lineTextUpToCursor)
    } else {
      return autoCompleteOptionKeys()
    }
  },

  resolveCompletionItem: (item: CompletionItem) => {
    return item
  },
}
