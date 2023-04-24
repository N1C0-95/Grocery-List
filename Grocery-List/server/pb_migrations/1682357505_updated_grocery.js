migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1ph9t8wpkv62cr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8gdrsjrc",
    "name": "item",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihockcz8",
    "name": "note",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1ph9t8wpkv62cr")

  // remove
  collection.schema.removeField("8gdrsjrc")

  // remove
  collection.schema.removeField("ihockcz8")

  return dao.saveCollection(collection)
})
