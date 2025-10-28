type Tile = {
  title: string;
  category: string;
};

const tiles: Array<Tile> = [
  { title: 'SPOON', category: 'Kitchen' },
  { title: 'FORK', category: 'Kitchen' },
  { title: 'KNIFE', category: 'Kitchen' },
  { title: 'PLATE', category: 'Kitchen' },
  { title: 'SOFA', category: 'Furniture' },
  { title: 'COUCH', category: 'Furniture' },
  { title: 'CHAIR', category: 'Furniture' },
  { title: 'TABLE', category: 'Furniture' },
  { title: 'APPLE', category: 'Fruit' },
  { title: 'BANANA', category: 'Fruit' },
  { title: 'ORANGE', category: 'Fruit' },
  { title: 'GRAPE', category: 'Fruit' },
  { title: 'RED', category: 'Color' },
  { title: 'BLUE', category: 'Color' },
  { title: 'GREEN', category: 'Color' },
  { title: 'YELLOW', category: 'Color' }
];

const shuffleArray = (initialArray: Array<Tile>) => {
  const arr = [...initialArray];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];

    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
};

type Category = Tile['category'];

const tileLookup = tiles.reduce<Record<string, Category>>((acc, tile) => {
  acc[tile.title] = tile.category;
  return acc;
}, {});

// change to map?
let selectedTiles: Array<string> = [];

function handleClick(tileTitle: string) {
  const wasTilePreviouslySelected = selectedTiles.includes(tileTitle);

  if (!wasTilePreviouslySelected) {
    selectedTiles.push(tileTitle);
  }

  if (wasTilePreviouslySelected) {
    selectedTiles = selectedTiles.filter((t) => t !== tileTitle);
  }

  if (selectedTiles.length === 4) {
    const categories = new Set(selectedTiles.map((title) => tileLookup[title]));

    const isPlayerVictorious = categories.size === 1;

    if (isPlayerVictorious) {
      console.log('You win!', categories.values().next().value);
    }

    if (!isPlayerVictorious) {
      console.log('❌ Not a match:', selectedTiles);
    }

    // reset selection for next attempt
    selectedTiles = [];
  }
}
