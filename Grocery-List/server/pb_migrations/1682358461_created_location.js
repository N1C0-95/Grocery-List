migrate((db) => {
  const collection = new Collection({
    "id": "g67iogq23x7u1k1",
    "created": "2023-04-24 17:47:41.018Z",
    "updated": "2023-04-24 17:47:41.018Z",
    "name": "location",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ajnv1myq",
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
  const collection = dao.findCollectionByNameOrId("g67iogq23x7u1k1");

  return dao.deleteCollection(collection);
})
