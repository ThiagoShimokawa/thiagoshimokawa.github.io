/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+                return 'NUMBER'
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
    : DIREITA
        {{
           $$ = $1;   
        }}  
    | ESQUERDA
        {{
           $$ = $1;   
        }} 
    | CIMA
        {{
           $$ = $1;   
        }}  
    | BAIXO
        {{
           $$ = $1;   
        }}
    | NUMBER
        {{
           {$$ = Number(yytext);}
        }}
    | RESETAR
        {{
            $$ = resetarCanvas();
        }}
    | MARCAR '(' e ')' TERMINADOR
        {{
            $$ = marcarDraw($3);
        }}
    | TIJOLO
        {{
            $$ = "tijolo";
        }}
    | PEDRA
        {{
            $$ = "pedra";
        }}
    | TNT
        {{
            $$ = "tnt";
        }}
    | GELO
        {{
            $$ = "gelo";
        }}
    | MOVER e TERMINADOR
        {{
            $$ = canvasDraw($2, 1);
        }}
    | MOVER e NUMBER TERMINADOR
        {{
            $$ = canvasDraw($2, $3);
        }}
    ;
