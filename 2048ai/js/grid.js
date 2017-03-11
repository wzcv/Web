function Grid(size) {
  this.size = size;
  this.startTiles   = 2;

  this.cells = [];

  this.build();
  this.playerTurn = true;
}

// pre-allocate these objects (for speed)
Grid.prototype.indexes = [];
for (var x=0; x<4; x++)="" {="" grid.prototype.indexes.push([]);="" for="" (var="" y="0;" y<4;="" y++)="" grid.prototype.indexes[x].push(="" {x:x,="" y:y}="" );="" }="" build="" a="" grid="" of="" the="" specified="" size="" grid.prototype.build="function" ()="" x="0;" <="" this.size;="" var="" row="this.cells[x]" =="" [];="" row.push(null);="" };="" find="" first="" available="" random="" position="" grid.prototype.randomavailablecell="function" cells="this.availableCells();" if="" (cells.length)="" return="" cells[math.floor(math.random()="" *="" cells.length)];="" grid.prototype.availablecells="function" self="this;" this.eachcell(function="" (x,="" y,="" tile)="" (!tile)="" cells.push(self.indexes[x][y]);="" cells.push(="" });="" cells;="" call="" callback="" every="" cell="" grid.prototype.eachcell="function" (callback)="" callback(x,="" this.cells[x][y]);="" check="" there="" are="" any="" grid.prototype.cellsavailable="function" !!this.availablecells().length;="" is="" taken="" grid.prototype.cellavailable="function" (cell)="" !this.celloccupied(cell);="" grid.prototype.celloccupied="function" !!this.cellcontent(cell);="" grid.prototype.cellcontent="function" (this.withinbounds(cell))="" this.cells[cell.x][cell.y];="" else="" null;="" inserts="" tile="" at="" its="" grid.prototype.inserttile="function" (tile)="" this.cells[tile.x][tile.y]="tile;" grid.prototype.removetile="function" grid.prototype.withinbounds="function" (position)="" position.x="">= 0 && position.x < this.size &&
         position.y >= 0 && position.y < this.size;
};

Grid.prototype.clone = function() {
  newGrid = new Grid(this.size);
  newGrid.playerTurn = this.playerTurn;
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      if (this.cells[x][y]) {
        newGrid.insertTile(this.cells[x][y].clone());
      }
    }
  }
  return newGrid;
};

// Set up the initial tiles to start the game with
Grid.prototype.addStartTiles = function () {
  for (var i=0; i<this.starttiles; 0="" 1="" 2="" 256="" 2048="" i++)="" {="" this.addrandomtile();="" }="" };="" adds="" a="" tile="" in="" random="" position="" grid.prototype.addrandomtile="function" ()="" if="" (this.cellsavailable())="" var="" value="Math.random()" <="" 0.9="" ?="" :="" 4;="" 512;="" tile(this.randomavailablecell(),="" value);="" this.inserttile(tile);="" save="" all="" positions="" and="" remove="" merger="" info="" grid.prototype.preparetiles="function" this.eachcell(function="" (x,="" y,="" tile)="" (tile)="" tile.mergedfrom="null;" tile.saveposition();="" });="" move="" its="" representation="" grid.prototype.movetile="function" (tile,="" cell)="" this.cells[tile.x][tile.y]="null;" this.cells[cell.x][cell.y]="tile;" tile.updateposition(cell);="" grid.prototype.vectors="{" 0:="" x:="" 0,="" y:="" -1="" },="" up="" 1:="" 1,="" right="" 2:="" down="" 3:="" -1,="" left="" get="" the="" vector="" representing="" chosen="" direction="" grid.prototype.getvector="function" (direction)="" vectors="" movement="" return="" this.vectors[direction];="" tiles="" on="" grid="" specified="" returns="" true="" was="" successful="" grid.prototype.move="function" up,="" right,="" 2:down,="" self="this;" cell,="" tile;="" traversals="this.buildTraversals(vector);" moved="false;" score="0;" won="false;" current="" information="" this.preparetiles();="" traverse="" traversals.x.foreach(function="" (x)="" traversals.y.foreach(function="" (y)="" cell="self.indexes[x][y];" (debug)="" console.log('tile="" @',="" x,="" y);="" vector);="" next="self.cellContent(positions.next);" only="" one="" per="" row="" traversal?="" (next="" &&="" next.value="==" tile.value="" !next.mergedfrom)="" merged="new" tile(positions.next,="" *="" 2);="" merged.mergedfrom="[tile," next];="" self.inserttile(merged);="" self.removetile(tile);="" converge="" two="" tiles'="" tile.updateposition(positions.next);="" update="" +="merged.value;" mighty="" (merged.value="==" 2048)="" else="" console.log(cell);="" console.log(tile);="" self.movetile(tile,="" positions.farthest);="" (!self.positionsequal(cell,="" tile))="" self.playerturn="false;" console.log('setting="" player="" turn="" to="" ',="" self.playerturn);="" from="" original="" cell!="" console.log('returning,="" playerturn="" is',="" (!moved)="" console.log('cell',="" cell);="" console.log('tile',="" tile);="" console.log('direction',="" direction);="" console.log(this.tostring());="" {moved:="" moved,="" score:="" score,="" won:="" won};="" grid.prototype.computermove="function()" this.playerturn="true;" build="" list="" of="" order="" grid.prototype.buildtraversals="function" (vector)="" [],="" []="" for="" (var="" pos="0;" this.size;="" pos++)="" traversals.x.push(pos);="" traversals.y.push(pos);="" always="" farthest="" (vector.x="==" 1)="" traversals.x="traversals.x.reverse();" (vector.y="==" traversals.y="traversals.y.reverse();" traversals;="" grid.prototype.findfarthestposition="function" (cell,="" vector)="" previous;="" progress="" towards="" until="" an="" obstacle="" is="" found="" do="" previous="cell;" previous.x="" vector.x,="" previous.y="" vector.y="" while="" (this.withinbounds(cell)="" this.cellavailable(cell));="" farthest:="" previous,="" next:="" used="" check="" merge="" required grid.prototype.movesavailable="function" this.cellsavailable()="" ||="" this.tilematchesavailable();="" available="" matches="" between="" (more="" expensive="" check)="" number="" grid.prototype.tilematchesavailable="function" x="0;" x++)="" y="0;" y++)="" direction++)="" other="self.cellContent(cell);" (other="" other.value="==" tile.value)="" true;="" matches++;="" these="" can="" be="" console.log(matches);="" false;="" matches;="" grid.prototype.positionsequal="function" (first,="" second)="" first.x="==" second.x="" first.y="==" second.y;="" grid.prototype.tostring="function()" string="" ;="" i="0;" i<4;="" j="0;" j<4;="" j++)="" (this.cells[j][i])="" '="" ';="" string;="" counts="" isolated="" groups.="" grid.prototype.islands="function()" mark="function(x," value)="" (x="">= 0 && x <= 3="" &&="" y="">= 0 && y <= 3="" &&="" self.cells[x][y]="" self.cells[x][y].value="=" value="" !self.cells[x][y].marked="" )="" {="" self.cells[x][y].marked="true;" for="" (direction="" in="" [0,1,2,3])="" var="" vector="self.getVector(direction);" mark(x="" +="" vector.x,="" y="" vector.y,="" value);="" }="" islands="0;" (var="" x="0;" x<4;="" x++)="" y<4;="" y++)="" if="" (this.cells[x][y])="" this.cells[x][y].marked="false" (this.cells[x][y]="" !this.cells[x][y].marked)="" islands++;="" mark(x,="" ,="" this.cells[x][y].value);="" return="" islands;="" measures="" how="" smooth="" the="" grid="" is="" (as="" values="" of="" pieces="" were="" interpreted="" as="" elevations).="" sums="" pairwise="" difference="" between="" neighboring="" tiles="" (in="" log="" space,="" so="" it="" represents="" number="" merges="" that="" need="" to="" happen="" before="" they="" can="" merge).="" note="" be="" distant="" grid.prototype.smoothness="function()" smoothness="0;" (="" this.celloccupied(="" this.indexes[x][y]="" ))="" ).value)="" math.log(2);="" direction="1;" direction<="2;" direction++)="" targetcell="this.findFarthestPosition(this.indexes[x][y]," vector).next;="" (this.celloccupied(targetcell))="" target="this.cellContent(targetCell);" targetvalue="Math.log(target.value)" -="Math.abs(value" targetvalue);="" smoothness;="" grid.prototype.monotonicity="function()" self="this;" marked="[];" queued="[];" highestvalue="0;" highestcell="{x:0," y:0};="" marked.push([]);="" queued.push([]);="" marked[x].push(false);="" queued[x].push(false);="" this.cells[x][y].value=""> highestValue) {
        highestValue = this.cells[x][y].value;
        highestCell.x = x;
        highestCell.y = y;
      }
    }
  }

  increases = 0;
  cellQueue = [highestCell];
  queued[highestCell.x][highestCell.y] = true;
  markList = [highestCell];
  markAfter = 1; // only mark after all queued moves are done, as if searching in parallel

  var markAndScore = function(cell) {
    markList.push(cell);
    var value;
    if (self.cellOccupied(cell)) {
      value = Math.log(self.cellContent(cell).value) / Math.log(2);
    } else {
      value = 0;
    }
    for (direction in [0,1,2,3]) {
      var vector = self.getVector(direction);
      var target = { x: cell.x + vector.x, y: cell.y+vector.y }
      if (self.withinBounds(target) && !marked[target.x][target.y]) {
        if ( self.cellOccupied(target) ) {
          targetValue = Math.log(self.cellContent(target).value ) / Math.log(2);
          if ( targetValue > value ) {
            //console.log(cell, value, target, targetValue);
            increases += targetValue - value;
          }
        } 
        if (!queued[target.x][target.y]) {
          cellQueue.push(target);
          queued[target.x][target.y] = true;
        }
      }
    }
    if (markAfter == 0) {
      while (markList.length > 0) {
        var cel = markList.pop();
        marked[cel.x][cel.y] = true;
      }
      markAfter = cellQueue.length;
    }
  }

  while (cellQueue.length > 0) {
    markAfter--;
    markAndScore(cellQueue.shift())
  }

  return -increases;
}

// measures how monotonic the grid is. This means the values of the tiles are strictly increasing
// or decreasing in both the left/right and up/down directions
Grid.prototype.monotonicity2 = function() {
  // scores for all four directions
  var totals = [0, 0, 0, 0];

  // up/down direction
  for (var x=0; x<4; x++)="" {="" var="" current="0;" next="current+1;" while="" (="" next<4="" )="" &&="" !this.celloccupied(="" this.indexes[x][next]="" ))="" next++;="" }="" if="" (next="">=4) { next--; }
      var currentValue = this.cellOccupied({x:x, y:current}) ?
        Math.log(this.cellContent( this.indexes[x][current] ).value) / Math.log(2) :
        0;
      var nextValue = this.cellOccupied({x:x, y:next}) ?
        Math.log(this.cellContent( this.indexes[x][next] ).value) / Math.log(2) :
        0;
      if (currentValue > nextValue) {
        totals[0] += nextValue - currentValue;
      } else if (nextValue > currentValue) {
        totals[1] += currentValue - nextValue;
      }
      current = next;
      next++;
    }
  }

  // left/right direction
  for (var y=0; y<4; y++)="" {="" var="" current="0;" next="current+1;" while="" (="" next<4="" )="" &&="" !this.celloccupied(="" this.indexes[next][y]="" ))="" next++;="" }="" if="" (next="">=4) { next--; }
      var currentValue = this.cellOccupied({x:current, y:y}) ?
        Math.log(this.cellContent( this.indexes[current][y] ).value) / Math.log(2) :
        0;
      var nextValue = this.cellOccupied({x:next, y:y}) ?
        Math.log(this.cellContent( this.indexes[next][y] ).value) / Math.log(2) :
        0;
      if (currentValue > nextValue) {
        totals[2] += nextValue - currentValue;
      } else if (nextValue > currentValue) {
        totals[3] += currentValue - nextValue;
      }
      current = next;
      next++;
    }
  }

  return Math.max(totals[0], totals[1]) + Math.max(totals[2], totals[3]);
}

Grid.prototype.maxValue = function() {
  var max = 0;
  for (var x=0; x<4; x++)="" {="" for="" (var="" y="0;" y<4;="" y++)="" if="" (this.celloccupied(this.indexes[x][y]))="" var="" value="this.cellContent(this.indexes[x][y]).value;" (value=""> max) {
          max = value;
        }
      }
    }
  }

  return Math.log(max) / Math.log(2);
}

// WIP. trying to favor top-heavy distributions (force consolidation of higher value tiles)
/*
Grid.prototype.valueSum = function() {
  var valueCount = [];
  for (var i=0; i</4;></4;></4;></=></=></this.starttiles;></4;>