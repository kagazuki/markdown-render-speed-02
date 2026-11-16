import { marked } from './vendor/marked/marked.esm.js';

const lexer = new marked.Lexer();
const parser = new marked.Parser();

// Fast single-pass marked parser reusing static instances
export function parse(markdown) {
  lexer.tokens = [];
  lexer.tokens.links = Object.create(null);
  lexer.inlineQueue = [];
  lexer.state = {
    inLink: false,
    inRawBlock: false,
    linkEmitted: false,
    linkParenPossible: true,
    top: true
  };
  const tokens = lexer.lex(markdown);
  return parser.parse(tokens);
}
