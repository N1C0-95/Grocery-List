migrate((db) => {
  const collection = new Collection({
    "id": "bdzyidz59yosjbt",
    "created": "2023-04-24 12:18:09.456Z",
    "updated": "2023-04-24 12:18:09.456Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qmtvvtz9",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bdzyidz59yosjbt");

  return dao.deleteCollection(collection);
})
