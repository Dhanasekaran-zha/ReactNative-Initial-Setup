import Realm from 'realm';

class sampleSchema extends Realm.Object {}

sampleSchema.schema = {
  name: 'Mobile',
  properties: {
    mobileNumber: 'int',
  },
};

let realm = new Realm({schema: [sampleSchema], schemaVersion: 1});

export default realm;
