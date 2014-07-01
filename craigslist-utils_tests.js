/*
 * Test this package by running this command from you app
 * folder:
 * 
 * > meteor test-packages craisglist-utils
 *
 */

Tinytest.add('craisglist-utils - main test', function (test) {

  test.isTrue(CL != undefined,'CL export cannot be undefined');

});
