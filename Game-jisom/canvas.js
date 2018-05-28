


// Global variables
   
      var canvas; // canvas
      var ctx; // context
      var cursor_eixo_X = 30; // Posição do cursor no eixo X
      var cursor_eixo_Y = 30; // Posição do cursor no eixo Y 
      var obstaculos = []; // Array com as coordenadas dos obstaculos.
      const tela_width_X = tela_height_Y = 510;
      const box_X = box_Y = 30; // Deslocamento padrão 30px
      
      /*  Cursor .......................... */
      var imgCursor = new Image();
      imgCursor.src = "img/mira.fw.png";
      imgCursor = imgCursor;

      /*  Fundo .......................... */
      var imgFundo = new Image();
      imgFundo.src = "img/fundo.fw.png";
      imgFundo = imgFundo;

      /*  Parede .......................... */
      var imgParede = new Image();
      imgParede.src = "img/tijolo.fw.png";
      imgParede = imgParede;

      /*  Pedra .......................... */
      var imgPedra = new Image();
      imgPedra.src = "img/pedra.fw.png";
      imgPedra = imgPedra;
      

      function obstaculoPadrao(){
        obstaculos = [
          { x: 150, y: 60, tipo: 'parede' },
          { x: 150, y: 90, tipo: 'parede' },
          { x: 150, y: 120, tipo: 'parede' },
          { x: 150, y: 150, tipo: 'pedra' },
          { x: 180, y: 150, tipo: 'pedra' }
        ];
      }


      // This function is called on page load.
      function canvas() {
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
         
        setInterval( Atualizar, 10 );
        obstaculoPadrao();
        //window.addEventListener('keydown', _controles, true);
      }

      function desenhaFundo() {
          ctx.drawImage(imgFundo, 0, 0);  
      }

      function desenhaCursor() {
        ctx.drawImage(imgCursor, cursor_eixo_X, cursor_eixo_Y);
      }

       function desenhaParede() {
        obstaculos.forEach(function(pos) {
          if(pos.tipo == 'parede')
            ctx.drawImage(imgParede, pos.x, pos.y);

          if(pos.tipo == 'pedra')
            ctx.drawImage(imgPedra, pos.x, pos.y);
        }, this);
      }

      function Atualizar() {
        desenhaFundo();
        desenhaParede();
        desenhaCursor();

      }

      function marcarDraw(obj) {
        console.log('x :' + cursor_eixo_X + ' y:' + cursor_eixo_Y + " - Obj: " + obj)
        obstaculos.push({x: cursor_eixo_X, y: cursor_eixo_Y, tipo: obj})
      }

      function canvasDraw(dir, n){
        console.log("Entrada: " + dir +" - " + n)
        if(n > 1)
          canvasDraw(dir, n-1)

        var msg = function(){
          alert('Ops, vai pra onde ?')
        }


        if(dir == "direita"){
          var c = verificarObstaculo(cursor_eixo_X + box_X , cursor_eixo_Y)
          
          if(!c )
            cursor_eixo_X = cursor_eixo_X + box_X;

          if (cursor_eixo_X > (tela_width_X - box_X - 30)){ 
            cursor_eixo_X = tela_width_X - box_X - 30;
            msg()
          } 
        }else if(dir=="esquerda"){
          var c = verificarObstaculo(cursor_eixo_X - box_X , cursor_eixo_Y)
          if(!c )
            cursor_eixo_X = cursor_eixo_X - box_X;
          if (cursor_eixo_X < 30){ 
              cursor_eixo_X = 30;
              msg()
          }   
        }else if(dir=="cima"){
          var c = verificarObstaculo(cursor_eixo_X, cursor_eixo_Y - box_Y)
          if(!c )
              cursor_eixo_Y = cursor_eixo_Y - box_Y;
          if (cursor_eixo_Y < 30){ 
             cursor_eixo_Y = 30;
             msg()
          }   
        }else if(dir=="baixo"){
          var c = verificarObstaculo(cursor_eixo_X , cursor_eixo_Y + box_Y)
          if(!c )
            cursor_eixo_Y = cursor_eixo_Y + box_Y;
          if (cursor_eixo_Y > tela_height_Y - box_Y - 30){ 
             cursor_eixo_Y = tela_height_Y - box_Y - 30; 
             msg()
          }   
        }
      }

      function verificarObstaculo(x,y){
        console.log("X = " + x)
        console.log("Y = " + y)

        var c = obstaculos.filter(v=>{
          console.log("x:"+v.x + " y:" + v.y , v.x == x && y == v.y )
          return v.x == x && y == v.y 
        })

        if(c.length > 0)
          return true
        return false  
      }

      function resetarCanvas(){
        $("#entrada").val('');
        cursor_eixo_X = cursor_eixo_Y = 30;
        obstaculoPadrao();
      }

      function _controles(evt) {
        switch (evt.keyCode) {

          // Left 
        case 37:
          canvasDraw('esquerda')
          break;

          // Right 
        case 39:
          canvasDraw('direita')
          break;

          // Down 
        case 40:
          canvasDraw('baixo')
          break;

          // Up 
        case 38:
          canvasDraw('cima')
          break;

        }

        
      
      }