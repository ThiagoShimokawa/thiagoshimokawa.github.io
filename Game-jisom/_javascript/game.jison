/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"direita"             return 'DIREITA'
"esquerda"            return 'ESQUERDA'
"cima"                return 'CIMA'
"baixo"               return 'BAIXO'
"resetar"             return 'RESETAR'
"marcar"              return 'MARCAR'
"pedra"               return 'PEDRA'
"tijolo"              return 'TIJOLO'
"tnt"                 return 'TNT'
"gelo"                return 'GELO'
"mover"               return 'MOVER'
"("                   return '('
")"                   return ')'
";"                   return 'TERMINADOR'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */



%start expressions

%% /* language grammar */

expressions
    : e EOF
        { return $1; }
    ;

e
    : RESETAR TERMINADOR
        {{
            $$ = resetarCanvas();
        }}
    | MARCAR '(' TIJOLO ')' TERMINADOR
        {{
            $$ = marcarDraw($3);
        }}
    | MARCAR '(' PEDRA ')' TERMINADOR
        {{
            $$ = marcarDraw($3);
        }}
    | MARCAR '(' TNT ')' TERMINADOR
        {{
            $$ = marcarDraw($3);
        }}
    | MARCAR '(' GELO ')' TERMINADOR
        {{
            $$ = marcarDraw($3);
        }}
    | MOVER CIMA TERMINADOR
        {{
            $$ = canvasDraw($2);
        }}
    | MOVER DIREITA TERMINADOR
        {{
            $$ = canvasDraw($2);
        }}
    | MOVER BAIXO TERMINADOR
        {{
            $$ = canvasDraw($2);
        }}
    | MOVER ESQUERDA TERMINADOR
        {{
            $$ = canvasDraw($2);
        }}
    ;
