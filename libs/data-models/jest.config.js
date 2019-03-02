module.exports = {
  name: 'data-models',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-models',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
