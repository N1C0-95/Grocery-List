migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bdzyidz59yosjbt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sogvwivk",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "g67iogq23x7u1k1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bdzyidz59yosjbt")

  // remove
  collection.schema.removeField("sogvwivk")

  return dao.saveCollection(collection)
})
