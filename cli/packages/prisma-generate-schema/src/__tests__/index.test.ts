import generateCRUDSchemaString from '../index';

describe('Generate opencrud schema', () => {
  test('Queries that return many entities should have the return value be required', () => {

    const model = `
      type Broadcast @pgTable(name: "broadcasts") {
        id:                     ID!                     @unique
        notifications:          [Notification!]!        @pgRelation
      }
      
      type Notification @pgTable(name: "notifications") {
        id:                     ID!                     @unique
      }
    `;

    const opencrudSchemaString = generateCRUDSchemaString(model);

    expect(opencrudSchemaString).toMatchSnapshot();
  });
});
