/*-- Injeção da caixa dentro da div..................................*/

  /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
  var toolbox = document.getElementById("toolbox");
  
  var options = { 
    toolbox : toolbox, 
    collapse : false, 
    comments : false, 
    disable : false, 
    maxBlocks : Infinity, 
    trashcan : true, 
    horizontalLayout : false, 
    toolboxPosition : 'start', 
    css : true, 
    media : '_blocos/media/', 
    rtl : false, 
    scrollbars : false, 
    sounds : true, 
    oneBasedIndex : true, 
    zoom : {
      controls : true, 
      wheel : true, 
      startScale : 1, 
      maxScale : 3, 
      minScale : 0.3, 
      scaleSpeed : 1.2
    }
  };
  
  /* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */
  Blockly.Blocks['tnt'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("TNT");
    this.setOutput(true, null);
    this.setColour(0);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  Blockly.Blocks['gelo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Gelo");
    this.setOutput(true, null);
    this.setColour(255);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  Blockly.Blocks['inicio'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Inicio");
    this.setNextStatement(true, null);
    this.setColour(105);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  Blockly.Blocks['tijolo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Tijolo");
    this.setOutput(true, null);
    this.setColour(0);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  Blockly.Blocks['pedra'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Pedra");
    this.setOutput(true, null);
    this.setColour(15);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  Blockly.Blocks['movimeto'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Mover para")
      .appendField(new Blockly.FieldDropdown([["Cima","cima"], ["Direita","direita"], ["Baixo","baixo"], ["Esquerda","esquerda"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  Blockly.Blocks['marcar'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("Marcar Obj");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

  /*......Retorno do código gerado pelos blocos  .......................*/
  Blockly.JavaScript['tnt'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'tnt';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['gelo'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'gelo';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['inicio'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'inicio;\n';
    return code;
  };

  Blockly.JavaScript['tijolo'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'tijolo';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['pedra'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'pedra';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['movimeto'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'mover '+ dropdown_name +';\n';
    return code;
  };

  Blockly.JavaScript['marcar'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'marcar'+ value_name +';\n';
    return code;
    //sconsole.log(value_name)
  };

  /* Inject your workspace */ 
  var workspace = Blockly.inject("blocklyDiv", options);

  /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
  var workspaceBlocks = document.getElementById("workspaceBlocks"); 
  
  /* Load blocks to workspace. */
  Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

  function showCode() {
    // Generate JavaScript code and display it.
   /* Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    //alert(code);
    document.getElementById("entrada").innerHTML = code;*/
  }

  function onFirstComment(event) {
    // Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    //alert(code);
    document.getElementById("entrada").value = code;
    console.log("blocos");
  }
  workspace.addChangeListener(onFirstComment);