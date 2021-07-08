import { join } from 'path'

export type OCamlFormatOption = {
  key: string
  values: string[]
  documentation: string
}

const numValues = Array.from({ length: 10 }, (_, i) => `${i}`)

export const options: OCamlFormatOption[] = [
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
  {
    key: 'assignment-operator',
    values: ['end-line', 'begin-line'],
    documentation: [
      'Position of the assignment operator. end-line positions assignment',
      'operators (`:=` and `<-`) at the end of the line and breaks after',
      'it if the whole assignment expression does not fit on a single',
      'line. begin-line positions assignment operators (`:=` and `<-`) at',
      'the beginning of the line and breaks before it if the whole',
      'assignment expression does not fit on a single line. The default',
      'value is end-line.',
    ].join(' '),
  },
  {
    key: 'break-before-in',
    values: ['fit-or-vertical', 'auto'],
    documentation: [
      'Whether the line should break before the in keyword of a let',
      'binding. fit-or-vertical will always break the line before the in',
      'keyword if the whole let binding does not fit on a single line.',
      'auto will only break the line if the in keyword does not fit on',
      'the previous line. The default value is fit-or-vertical.',
    ].join(' '),
  },
  {
    key: 'break-cases',
    values: ['fit', 'nested', 'toplevel', 'fit-or-vertical', 'all'],
    documentation: [
      'Break pattern match cases. Specifying fit lets pattern matches',
      'break at the margin naturally. nested forces a break after nested',
      'or-patterns to highlight the case body. Note that with nested, the',
      'indicate-nested-or-patterns option is not needed, and so ignored.',
      'toplevel forces top-level cases (i.e. not nested or-patterns) to',
      'break across lines, otherwise break naturally at the margin.',
      'fit-or-vertical tries to fit all or-patterns on the same line,',
      'otherwise breaks. all forces all pattern matches to break across',
      'lines. The default value is fit.',
    ].join(' '),
  },
  {
    key: 'break-collection-expressions',
    values: ['fit-or-vertical', 'wrap'],
    documentation: [
      'Break collection expressions (lists and arrays) elements by',
      'elements. fit-or-vertical vertically breaks expressions if they do',
      'not fit on a single line. wrap will group simple expressions and',
      'try to format them in a single line. The default value is',
      'fit-or-vertical.',
    ].join(' '),
  },
  {
    key: 'break-fun-decl',
    values: ['wrap', 'fit-or-vertical', 'smart'],
    documentation: [
      'Style for function declarations and types. wrap breaks only if',
      'necessary. fit-or-vertical vertically breaks arguments if they do',
      'not fit on a single line. smart is like fit-or-vertical but try to',
      'fit arguments on their line if they fit. The default value is',
      'wrap.',
    ].join(' '),
  },
  {
    key: 'break-fun-sig',
    values: ['wrap', 'fit-or-vertical', 'smart'],
    documentation: [
      'Style for function signatures. wrap breaks only if necessary.',
      'fit-or-vertical vertically breaks arguments if they do not fit on',
      'a single line. smart is like fit-or-vertical but try to fit',
      'arguments on their line if they fit. The default value is wrap.',
    ].join(' '),
  },
  {
    key: 'break-infix',
    values: ['wrap', 'fit-or-vertical'],
    documentation: [
      'Break sequence of infix operators. wrap will group simple',
      'expressions and try to format them in a single line.',
      'fit-or-vertical vertically breaks expressions if they do not fit',
      'on a single line. The default value is wrap.',
    ].join(' '),
  },
  {
    key: 'break-infix-before-func',
    values: ['true', 'false'],
    documentation: [
      'Break infix operators whose right arguments are anonymous',
      'functions specially: do not break after the operator so that the',
      'first line of the function appears docked at the end of line after',
      'the operator. The flag is unset by default.',
    ].join(' '),
  },
  {
    key: 'break-separators',
    values: ['after', 'before'],
    documentation: [
      'Break before or after separators such as `;` in list or record',
      'expressions. after breaks the expressions after the separator.',
      'before breaks the expressions before the separator. The default',
      'value is after.',
    ].join(' '),
  },
  {
    key: 'break-sequences',
    values: ['true', 'false'],
    documentation: [
      'Break before or after separators such as `;` in list or record',
      'expressions. after breaks the expressions after the separator.',
      'before breaks the expressions before the separator. The default',
      'value is after.',
    ].join(' '),
  },
  {
    key: 'break-string-literals',
    values: ['auto', 'never'],
    documentation: [
      'Break string literals. auto mode breaks lines at newlines and',
      'wraps string literals at the margin. never mode formats string',
      'literals as they are parsed, in particular, with escape sequences',
      'expanded. The default value is auto.',
    ].join(' '),
  },
  {
    key: 'break-struct',
    values: ['force', 'natural'],
    documentation: [
      'Break struct-end module items. force will break struct-end phrases',
      'unconditionally. natural will break struct-end phrases naturally',
      'at the margin. The default value is force.',
    ].join(' '),
  },
  {
    key: 'cases-exp-indent',
    values: numValues,
    documentation: [
      'Indentation of cases expressions (COLS columns). See also the',
      'cases-matching-exp-indent and nested-match options. The default',
      'value is 4. Cannot be set in attributes.',
    ].join(' '),
  },
  {
    key: 'cases-matching-exp-indent',
    values: ['normal', 'compact'],
    documentation: [
      'Indentation of cases right-hand sides which are `match` or `try`',
      'expressions. normal indents as it would any other expression.',
      'compact forces an indentation of 2, unless nested-match is set to',
      "align and we're on the last case. The default value is normal.",
    ].join(' '),
  },
  {
    key: 'disable',
    values: ['true', 'false'],
    documentation: [
      'Disable ocamlformat. This is used in attributes to locally disable',
      'automatic code formatting. One can also use [@@@ocamlformat',
      '"enable"] instead of [@@@ocamlformat "disable=false"]. The flag is',
      'unset by default.',
    ].join(' '),
  },
  {
    key: 'disambiguate-non-breaking-match',
    values: ['true', 'false'],
    documentation: [
      'Add parentheses around matching constructs that fit on a single',
      'line. The flag is unset by default.',
    ].join(' '),
  },
  {
    key: 'doc-comments',
    values: ['after-when-possible', 'before-except-val', 'before'],
    documentation: [
      'Doc comments position. after-when-possible puts doc comments after',
      'the corresponding code. This option has no effect on variant',
      'declarations because that would change their meaning and on',
      'structures, signatures and objects for readability.',
      'before-except-val puts doc comments before the corresponding code,',
      'but puts doc comments of val and external declarations after the',
      'corresponding declarations. before puts comments before the',
      'corresponding code. The default value is after-when-possible.',
    ].join(' '),
  },
  {
    key: 'doc-comments-padding',
    values: numValues,
    documentation: [
      'Add PADDING spaces before doc comments in type declarations. The',
      'default value is 2.',
    ].join(' '),
  },
  {
    key: 'doc-comments-tag-only',
    values: ['default', 'fit'],
    documentation: [
      'Position of doc comments with only tags. default means no special',
      'treatment. fit puts doc comments on the same line. The default',
      'value is default.',
    ].join(' '),
  },
  {
    key: 'dock-collection-brackets',
    values: ['true', 'false'],
    documentation: [
      'Dock the brackets of lists, arrays and records, so that when the',
      'collection does not fit on a single line the brackets are opened',
      'on the preceding line and closed on the following line. The flag',
      'is set by default.',
    ].join(' '),
  },
  {
    key: 'exp-grouping',
    values: ['parens', 'preserve'],
    documentation: [
      'Style of expression grouping. parens groups expressions using',
      'parentheses. preserve preserves the original grouping syntax',
      '(parentheses or begin/end). The default value is parens.',
    ].join(' '),
  },
  {
    key: 'extension-indent',
    values: numValues,
    documentation: [
      'Indentation of items inside extension nodes (COLS columns). The',
      'default value is 2.',
    ].join(' '),
  },
  {
    key: 'field-space',
    values: ['loose', 'tight', 'tight-decl'],
    documentation: [
      'Whether or not to use a space between a field name and the rhs.',
      'This option affects records and objects. loose does. tight does',
      'not use a space between a field name and the punctuation symbol',
      '(`:` or `=`). tight-decl is tight for declarations and loose for',
      'instantiations. The default value is loose.',
    ].join(' '),
  },
  {
    key: 'function-indent',
    values: numValues,
    documentation: 'Indentation of function cases (COLS columns). The default value is 2.',
  },
  {
    key: 'function-indent-nested',
    values: ['never', 'always', 'auto'],
    documentation: [
      'Whether the function-indent parameter should be applied even when',
      'in a sub-block. never only applies function-indent if the function',
      'block starts a line. always always apply function-indent. auto',
      'applies function-indent when seen fit. The default value is never.',
    ].join(' '),
  },
]
