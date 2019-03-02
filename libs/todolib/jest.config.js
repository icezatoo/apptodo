module.exports = {
  name: 'todolib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/todolib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
