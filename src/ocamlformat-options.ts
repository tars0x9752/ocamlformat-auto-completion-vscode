import { join } from 'path'

export type OCamlFormatOption = {
  key: string
  values: string[]
  documentation: string
}

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
]
