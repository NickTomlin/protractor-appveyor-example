describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://ui-grid.info/docs/#/tutorial/190_large_dataset');

    var rows = element.all(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index'));

    rows.count().then(console.log);

    rows.each(function(element, index) {
      element.getText().then(function (text) {
        console.log(index, text);
      });
    });
  });
});
