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
"parede"              return 'PAREDE'
"mover"               return 'MOVER'
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
    | MARCAR e
        {{
            $$ = marcarDraw($2);
        }}
    | PAREDE
        {{
            $$ = "parede";
        }}
    | PEDRA
        {{
            $$ = "pedra";
        }}
    | MOVER e
        {{
            $$ = canvasDraw($2, 1);
        }}
    | MOVER e NUMBER
        {{
            $$ = canvasDraw($2, $3);
        }}
    ;
