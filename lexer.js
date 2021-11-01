const moo = require('moo');
let lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    string:  /"(?:\\["\\]|[^\n"\\])*"/,
    lparen:  '(',
    rparen:  ')',
    keyword: ['while', 'if', 'else', 'test'],
    type: ['int','const','var','long','short','void','function'],
    builtinfunction: ['print\(\)','prompt\(\)'],
    NL: { match: /\n/, lineBreaks: true },
})
lexer.reset("while (0) test")
while (true) {
    const token = lexer.next();
    if (!token) {
        break;
    }
    console.log(token);
}
