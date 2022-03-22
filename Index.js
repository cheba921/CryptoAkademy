function Block(letter, rate, used, father, code) f
this.letter - letter;
this.rate - rate;
this.used = used;
this. father = father;
this.code = code;
function FindCode(block) {
if (tree[block.father].code !=
+) f
block.code = tree[block.father].code + '1':
7
else f
if (block.letter == tree[minIndex].letter) f
block.code = "O';
else if (block.letter == tree[preminIndex].letter){
block. code = '1':
}
else f
FindCode(tree[block.father]);
block.code = tree[block.father].code + 'O';
