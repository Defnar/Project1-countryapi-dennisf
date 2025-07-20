export default function listBuilder(objectList) {
    const listKeys = Object.keys(objectList);
    const listNames = listKeys.map((key) => {
        const value = objectList[key];
        if (typeof value == "object") {
            return value.name;
        }
        return value;
    });
    return listNames.join(", ");
}
