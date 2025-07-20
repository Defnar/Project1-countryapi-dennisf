interface Currencies {
  [code: string]: {
    name: string;
    symbol: string;
  };
}

interface Languages {
  [code: string]: string;
}


export default function listBuilder(objectList: Currencies | Languages): string {
  const listKeys = Object.keys(objectList);

  const listNames = listKeys.map((key) => {
    const value = objectList[key];
    if (typeof value == "object") {
        return value.name;
    }
    return value;

})

  return listNames.join(", ");
}
