migrate((db) => {
  const collection = new Collection({
    "id": "l1ph9t8wpkv62cr",
    "created": "2023-04-24 17:29:08.797Z",
    "updated": "2023-04-24 17:29:08.797Z",
    "name": "grocery",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d7ga9gwn",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "done",
            "deleted"
          ]
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
  const collection = dao.findCollectionByNameOrId("l1ph9t8wpkv62cr");

  return dao.deleteCollection(collection);
})
