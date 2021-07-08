export type OCamlFormatOption = {
  key: string
  values: string[]
  documentation: string
}

const numValues = Array.from({ length: 10 }, (_, i) => `${i}`)

export const OPTIONS_V0_18_0: OCamlFormatOption[] = [
  // OPTIONS
  {
    key: 'check',
    values: ['true', 'false'],
    documentation: [
      'Check whether the input files already are formatted. Mutually',
      'exclusive with --inplace and --output.',
    ].join(' '),
  },
  {
    key: 'comment-check',
    values: ['true', 'false'],
    documentation: [
      'Control whether to check comments and documentation comments.',
      'Unsafe to turn off. May be set in .ocamlformat. The flag is set by',
      'default.',
    ].join(' '),
  },
  {
    key: 'disable-conf-attrs',
    values: ['true', 'false'],
    documentation: 'Disable configuration in attributes.',
  },
  {
    key: 'disable-conf-files',
    values: ['true', 'false'],
    documentation: 'Disable .ocamlformat configuration files.',
  },
  {
    key: 'disable-outside-detected-project',
    values: ['true', 'false'],
    documentation: [
      'Warning: this option is deprecated and will be removed in',
      'OCamlFormat v1.0.',
    ].join(' '),
  },
  {
    key: 'enable-outside-detected-project',
    values: ['true', 'false'],
    documentation: [
      'Read .ocamlformat config files outside the current project. The',
      'project root of an input file is taken to be the nearest ancestor',
      'directory that contains a .git or .hg or dune-project file.',
      'Formatting is enabled even if no .ocamlformat configuration file',
      'is found.',
    ].join(' '),
  },
  {
    key: 'debug',
    values: ['true', 'false'],
    documentation: 'Generate debugging output.',
  },
  {
    key: 'inplace',
    values: ['true', 'false'],
    documentation: 'Format in-place, overwriting input file(s).',
  },
  {
    key: 'ignore-invalid-option',
    values: ['true', 'false'],
    documentation: 'Ignore invalid options (e.g. in .ocamlformat).',
  },
  {
    key: 'impl',
    values: ['true', 'false'],
    documentation: 'Parse file with unrecognized extension as an implementation.',
  },
  {
    key: 'intf',
    values: ['true', 'false'],
    documentation: 'Parse file with unrecognized extension as an interface.',
  },
  {
    key: 'margin-check',
    values: ['true', 'false'],
    documentation: 'Emit a warning if the formatted output exceeds the margin.',
  },
  {
    key: 'max-iters',
    values: numValues,
    documentation: [
      'Fail if output of formatting does not stabilize within N',
      'iterations. May be set in .ocamlformat. The default value is 10',
    ].join(' '),
  },
  {
    key: 'name',
    values: ['NAME'],
    documentation: [
      'Name of input file for use in error reporting and starting point',
      "when searching for '.ocamlformat' files. Defaults to the input",
      'file name. Some options can be specified in configuration files',
      "named '.ocamlformat' in the same or a parent directory of NAME,",
      'see documentation of other options for details.',
    ].join(' '),
  },
  {
    key: 'no-comment-check',
    values: ['true', 'false'],
    documentation: 'Unset comment-check.',
  },
  {
    key: 'no-quiet',
    values: ['true', 'false'],
    documentation: 'Unset comment-check.',
  },
  {
    key: 'no-version-check',
    values: ['true', 'false'],
    documentation: [
      'Do not check that the version matches the one specified in',
      '.ocamlformat.',
    ].join(' '),
  },
  {
    key: 'numeric',
    values: ['X-Y'],
    documentation: [
      'Instead of re-formatting the file, output one integer per line',
      'corresponding to the indentation value, printing as many values as',
      'lines in the range between lines X and Y (included).',
    ].join(' '),
  },
  {
    key: 'output',
    values: ['DST'],
    documentation: [
      'Output file. Mutually exclusive with --inplace. Write to stdout if',
      'omitted.',
    ].join(' '),
  },
  {
    key: 'ocp-indent-config',
    values: ['true', 'false'],
    documentation: [
      'Read .ocp-indent configuration files. base is an alias for',
      'let-binding-indent. type is an alias for type-decl-indent. in is',
      'an alias for indent-after-in. with sets function-indent and',
      'match-indent. match_clause is an alias for cases-exp-indent.',
      'ppx_stritem_ext is an alias for stritem-extension-indent.',
      'max_indent is an alias for max-indent. strict_with sets',
      'function-indent-nested and match-indent-nested.',
    ].join(' '),
  },
  {
    key: 'profile',
    values: ['conventional', 'default', 'compact', 'sparse', 'ocamlformat', 'janestreet'],
    documentation: [
      'Select a preset profile which sets all options, overriding lower',
      'priority configuration. The conventional profile aims to be as',
      'familiar and "conventional" appearing as the available options',
      'allow. default is an alias for the conventional profile. The',
      'compact profile is similar to ocamlformat but opts for a generally',
      'more compact code style. The sparse profile is similar to',
      'ocamlformat but opts for a generally more sparse code style. The',
      'ocamlformat profile aims to take advantage of the strengths of a',
      'parsetree-based auto-formatter, and to limit the consequences of',
      'the weaknesses imposed by the current implementation. This is a',
      'style which optimizes for what the formatter can do best, rather',
      'than to match the style of any existing code. General guidelines',
      'that have directed the design include: Legibility, in the sense of',
      'making it as hard as possible for quick visual parsing to give the',
      'wrong interpretation, is of highest priority; Whenever possible',
      'the high-level structure of the code should be obvious by looking',
      'only at the left margin, in particular, it should not be necessary',
      'to visually jump from left to right hunting for critical keywords,',
      'tokens, etc; All else equal compact code is preferred as reading',
      'without scrolling is easier, so indentation or white space is',
      'avoided unless it helps legibility; Attention has been given to',
      'making some syntactic gotchas visually obvious. The janestreet',
      'profile is used at Jane Street. The default value is default.',
    ].join(' '),
  },
  {
    key: 'print-config',
    values: ['true', 'false'],
    documentation: [
      'Print the configuration determined by the environment variable,',
      'the configuration files, preset profiles and command line.',
      'Attributes are not considered. If many input files are specified,',
      'only print the configuration for the first file. If no input file',
      'is specified, print the configuration for the root directory if',
      'specified, or for the current working directory otherwise.',
    ].join(' '),
  },
  {
    key: 'quiet',
    values: ['true', 'false'],
    documentation: 'Quiet. May be set in .ocamlformat. The flag is unset by default.',
  },
  {
    key: 'root',
    values: ['DIR'],
    documentation: [
      'Root of the project. If specified, only take into account',
      '.ocamlformat configuration files inside DIR and its',
      'subdirectories.',
    ].join(' '),
  },
  {
    key: 'version',
    values: ['0.18.0'],
    documentation: 'The version that you use to format.',
  },

  // CODE FORMATTING STYLE OPTIONS
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
  {
    key: 'if-then-else',
    values: ['compact', 'fit-or-vertical', 'keyword-first', 'k-r'],
    documentation: [
      'If-then-else formatting. compact tries to format an if-then-else',
      'expression on a single line. fit-or-vertical vertically breaks',
      'branches if they do not fit on a single line. keyword-first',
      'formats if-then-else expressions such that the if-then-else',
      'keywords are the first on the line. k-r formats if-then-else',
      'expressions with parentheses that match the K&R style. The default',
      'value is compact.',
    ].join(' '),
  },
  {
    key: 'indent-after-in',
    values: numValues,
    documentation: [
      'Indentation (COLS columns) after `let ... in`, unless followed by',
      'another `let`. The default value is 0. Cannot be set in',
      'attributes.',
    ].join(' '),
  },
  {
    key: 'indicate-multiline-delimiters',
    values: ['no', 'space', 'closing-on-separate-line'],
    documentation: [
      'How to indicate that two matching delimiters live on different',
      "lines. no doesn't do anything special to indicate the closing",
      'delimiter. space prints a space inside the delimiter to indicate',
      'the matching one is on a different line. closing-on-separate-line',
      'makes sure that the closing delimiter is on its own line. The',
      'default value is no.',
    ].join(' '),
  },
  {
    key: 'indicate-nested-or-patterns',
    values: ['unsafe-no', 'space'],
    documentation: [
      'Control whether or not to indicate nested or-pattern using',
      'indentation. unsafe-no does not indicate nested or-patterns.',
      'Warning: this can produce confusing code where a short body of a',
      'match case is visually hidden by surrounding long patterns,',
      'leading to misassociation between patterns and body expressions.',
      'space starts lines of nested or-patterns with " |" rather than "|',
      '". The default value is unsafe-no.',
    ].join(' '),
  },
  {
    key: 'infix-precedence',
    values: ['indent', 'parens'],
    documentation: [
      'Use indentation or also discretionary parentheses to explicitly',
      'disambiguate precedences of infix operators. indent uses',
      'indentation to explicitly disambiguate precedences of infix',
      'operators. parens uses parentheses to explicitly disambiguate',
      'precedences of infix operators. The default value is indent.',
    ].join(' '),
  },
  {
    key: 'leading-nested-match-parens',
    values: ['true', 'false'],
    documentation: [
      'Nested match parens formatting. The flag is unset by default.',
      'Cannot be set in attributes.',
    ].join(' '),
  },
  {
    key: 'let-and',
    values: ['compact', 'sparse'],
    documentation: [
      'Style of let_and. compact will try to format `let p = e and p = e`',
      'in a single line. sparse will always break between them. The',
      'default value is compact.',
    ].join(' '),
  },
  {
    key: 'let-binding-indent',
    values: numValues,
    documentation: [
      'Indentation of let binding expressions (COLS columns) if they do',
      'not fit on a single line. The default value is 2. Cannot be set in',
      'attributes.',
    ].join(' '),
  },
  {
    key: 'let-binding-spacing',
    values: ['compact', 'sparse', 'double-semicolon'],
    documentation: [
      'Spacing between let binding. compact spacing separates adjacent',
      'let bindings in a module according to module-item-spacing. sparse',
      'places two open lines between a multi-line module-level let',
      'binding and the next. double-semicolon places double semicolons',
      'and an open line between a multi-line module-level let binding and',
      'the next. The default value is compact.',
    ].join(' '),
  },
  {
    key: 'let-module',
    values: ['compact', 'sparse'],
    documentation: [
      'Module binding formatting. compact does not break a line after the',
      'let module ... = and before the in if the module declaration does',
      'not fit on a single line. sparse breaks a line after let module',
      '... = and before the in if the module declaration does not fit on',
      'a single line. The default value is compact.',
    ].join(' '),
  },
  {
    key: 'margin',
    values: numValues,
    documentation: [
      'Format code to fit within COLS columns. The default value is 80.',
      'Cannot be set in attributes.',
    ].join(' '),
  },
  {
    key: 'match-indent',
    values: numValues,
    documentation: 'Indentation of match/try cases (COLS columns). The default value is 0.',
  },
  {
    key: 'match-indent-nested',
    values: ['never', 'always', 'auto'],
    documentation: [
      'Whether the match-indent parameter should be applied even when in',
      'a sub-block. never only applies match-indent if the match block',
      'starts a line. always always apply match-indent. auto applies',
      'match-indent when seen fit. The default value is never.',
    ].join(' '),
  },
  {
    key: 'max-indent',
    values: numValues,
    documentation: [
      'Maximum offset (COLS columns) added to a new line in addition to',
      'the offset of the previous line. The default value is 68. Cannot',
      'be set in attributes.',
    ].join(' '),
  },
  {
    key: 'module-item-spacing',
    values: ['sparse', 'preserve', 'compact'],
    documentation: [
      'Spacing between items of structures and signatures. sparse will',
      'always break a line between two items. preserve will not leave',
      'open lines between one-liners of similar sorts unless there is an',
      'open line in the input. compact will not leave open lines between',
      'one-liners of similar sorts. The default value is sparse.',
    ].join(' '),
  },
  {
    key: 'nested-match',
    values: ['wrap', 'align'],
    documentation: [
      'Style of a pattern-matching nested in the last case of another',
      'pattern-matching. wrap wraps the nested pattern-matching with',
      'parentheses and adds indentation. align vertically aligns the',
      'nested pattern-matching under the encompassing pattern-matching.',
      'The default value is wrap.',
    ].join(' '),
  },
  {
    key: 'no-align-cases',
    values: ['true', 'false'],
    documentation: 'Unset align-cases.',
  },
  {
    key: 'no-align-constructors-decl',
    values: ['true', 'false'],
    documentation: 'Unset align-constructors-decl.',
  },
  {
    key: 'no-align-variants-decl',
    values: ['true', 'false'],
    documentation: 'Unset align-variants-decl.',
  },
  {
    key: 'no-break-infix-before-func',
    values: ['true', 'false'],
    documentation: 'Unset break-infix-before-func.',
  },
  {
    key: 'no-break-sequences',
    values: ['true', 'false'],
    documentation: 'Unset break-sequences.',
  },
  {
    key: 'no-disable',
    values: ['true', 'false'],
    documentation: 'Unset disable.',
  },
  {
    key: 'no-disambiguate-non-breaking-match',
    values: ['true', 'false'],
    documentation: 'Unset disambiguate-non-breaking-match.',
  },
  {
    key: 'no-dock-collection-brackets',
    values: ['true', 'false'],
    documentation: 'Unset dock-collection-brackets.',
  },
  {
    key: 'no-leading-nested-match-parens',
    values: ['true', 'false'],
    documentation: 'Unset leading-nested-match-parens.',
  },
  {
    key: 'no-ocp-indent-compat',
    values: ['true', 'false'],
    documentation: 'Unset ocp-indent-compat.',
  },
  { key: 'no-parens-ite', values: ['true', 'false'], documentation: 'Unset parens-ite.' },
  {
    key: 'no-parse-docstrings',
    values: ['true', 'false'],
    documentation: 'Unset parse-docstrings.',
  },
  {
    key: 'no-space-around-arrays',
    values: ['true', 'false'],
    documentation: 'Unset space-around-arrays.',
  },
  {
    key: 'no-space-around-lists',
    values: ['true', 'false'],
    documentation: 'Unset space-around-lists.',
  },
  {
    key: 'no-space-around-records',
    values: ['true', 'false'],
    documentation: 'Unset space-around-records.',
  },
  {
    key: 'no-space-around-variants',
    values: ['true', 'false'],
    documentation: 'Unset space-around-variants.',
  },
  { key: 'no-wrap-comments', values: ['true', 'false'], documentation: 'Unset wrap-comments.' },
  { key: 'no-wrap-fun-args', values: ['true', 'false'], documentation: 'Unset wrap-fun-args.' },
  {
    key: 'ocp-indent-compat',
    values: ['true', 'false'],
    documentation: [
      'Attempt to generate output which does not change (much) when',
      'post-processing with ocp-indent. The flag is unset by default.',
    ].join(' '),
  },
  {
    key: 'parens-ite',
    values: ['true', 'false'],
    documentation: [
      'Uses parentheses around if-then-else branches that spread across',
      'multiple lines. The flag is unset by default.',
    ].join(' '),
  },
  {
    key: 'parens-tuple',
    values: ['always', 'multi-line-only'],
    documentation: [
      'Parens tuple expressions. always always uses parentheses around',
      'tuples. multi-line-only mode will try to skip parens for',
      'single-line tuples. The default value is always.',
    ].join(' '),
  },
  {
    key: 'parens-tuple-patterns',
    values: ['multi-line-only', 'always'],
    documentation: [
      'Parens tuple patterns. multi-line-only mode will try to skip',
      'parens for single-line tuple patterns. always always uses',
      'parentheses around tuples patterns. The default value is',
      'multi-line-only.',
    ].join(' '),
  },
  {
    key: 'parse-docstrings',
    values: ['true', 'false'],
    documentation: ' Parse and format docstrings. The flag is unset by default.',
  },
  {
    key: 'sequence-blank-line',
    values: ['preserve-one', 'compact'],
    documentation: [
      'Blank line between expressions of a sequence. preserve will keep a',
      'blank line between two expressions of a sequence if the input',
      'contains at least one. compact will not keep any blank line',
      'between expressions of a sequence. The default value is',
      'preserve-one.',
    ].join(' '),
  },
  {
    key: 'sequence-style',
    values: ['terminator', 'separator', 'before'],
    documentation: [
      'Style of sequence. terminator only puts spaces after semicolons.',
      'separator puts spaces before and after semicolons. before breaks',
      'the sequence before semicolons. The default value is terminator.',
    ].join(' '),
  },
  {
    key: 'single-case',
    values: ['compact', 'sparse'],
    documentation: [
      'Style of pattern matching expressions with only a single case.',
      'compact will try to format a single case on a single line. sparse',
      'will always break the line before a single case. The default value',
      'is compact.',
    ].join(' '),
  },
  {
    key: 'space-around-arrays',
    values: ['true', 'false'],
    documentation: 'Add a space inside the delimiters of arrays. The flag is set by default.',
  },
  {
    key: 'space-around-lists',
    values: ['true', 'false'],
    documentation: 'Add a space inside the delimiters of lists. The flag is set by default.',
  },
  {
    key: 'space-around-records',
    values: ['true', 'false'],
    documentation: 'Add a space inside the delimiters of lists. The flag is set by default.',
  },
  {
    key: 'space-around-variants',
    values: ['true', 'false'],
    documentation: 'Add a space inside the delimiters of variants. The flag is set by default.',
  },
  {
    key: 'stritem-extension-indent',
    values: numValues,
    documentation: [
      'Indentation of structure items inside extension nodes (COLS',
      'columns). The default value is 0.',
    ].join(' '),
  },
  {
    key: 'type-decl',
    values: ['compact', 'sparse'],
    documentation: [
      'Style of type declaration. compact will try to format constructors',
      'and records definition in a single line. sparse will always break',
      'between constructors and record fields. The default value is',
      'compact.',
    ].join(' '),
  },
  {
    key: 'type-decl-indent',
    values: numValues,
    documentation: [
      'Indentation of type declarations (COLS columns) if they do not fit',
      'on a single line. The default value is 2. Cannot be set in',
      'attributes.',
    ].join(' '),
  },
  {
    key: 'wrap-comments',
    values: ['true', 'false'],
    documentation: [
      'Wrap comments and docstrings. Comments and docstrings are divided',
      'into paragraphs by open lines (two or more consecutive newlines),',
      'and each paragraph is wrapped at the margin. Multi-line comments',
      'with vertically-aligned asterisks on the left margin are not',
      'wrapped. Consecutive comments with both left and right margin',
      'aligned are not wrapped either. The flag is unset by default.',
    ].join(' '),
  },
  {
    key: 'wrap-fun-args',
    values: ['true', 'false'],
    documentation: 'Style for function call. The flag is set by default.',
  },
]
