'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up() {
    this.create('books', (table) => {
      table.increments()
      table.string('title').notNullable().unique()
      table.string('author').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('books')
  }
}

module.exports = BookSchema
