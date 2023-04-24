migrate((db) => {
  const collection = new Collection({
    "id": "ujg5jeegoy1bkc4",
    "created": "2023-04-24 17:39:23.233Z",
    "updated": "2023-04-24 17:39:23.233Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "idcleesi",
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
  const collection = dao.findCollectionByNameOrId("ujg5jeegoy1bkc4");

  return dao.deleteCollection(collection);
})
