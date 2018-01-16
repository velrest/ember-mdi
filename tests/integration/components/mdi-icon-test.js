import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdi-icon', 'Integration | Component | mdi icon', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{mdi-icon icon="face"}}`);
  assert.equal(this.$('svg').html().trim(), '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons.svg#face"></use>', 'Icon face is correct');

  this.render(hbs`{{mdi-icon "bug"}}`);
  assert.equal(this.$('svg').html().trim(), '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons.svg#bug"></use>', 'Icon bug is correct');
});

test('properties work', function(assert) {
  this.render(hbs`{{mdi-icon "bug"}}`);
  assert.ok(this.$('svg').hasClass('mdi-icon'), 'Has the class mdi-icon');

  this.render(hbs`{{mdi-icon "alert"}}`);
  assert.ok(this.$('svg').hasClass('mdi-icon-alert'), 'Has the class mdi-icon-alert');

  this.render(hbs`{{mdi-icon "bug" size=42}}`);
  assert.equal(this.$('svg').attr('viewBox'), '0 0 42 42', 'viewBox is correct');
  assert.equal(this.$('svg').attr('height'), '42', 'height is correct');
  assert.equal(this.$('svg').attr('width'), '42', 'width is correct');

  this.render(hbs`{{mdi-icon "bug" spin=true}}`);
  assert.ok(this.$('svg').hasClass('mdi-icon-spin'), 'Spin class');

  const rotate = 90;
  this.set('rotate', rotate);
  this.render(hbs`{{mdi-icon "bug" rotate=rotate }}`);
  assert.equal(this.$('svg').attr('transform'), `rotate(${rotate})`, 'Rotate is correct');

  this.render(hbs`{{mdi-icon "bug" flipH=true}}`);
  assert.ok(this.$('svg').attr('transform').indexOf('scale(-1,1)') >= 0, 'Horizontal flip is correct');

  this.render(hbs`{{mdi-icon "bug" flipV=true}}`);
  assert.ok(this.$('svg').attr('transform').indexOf('scale(1,-1)') >= 0, 'Vertical flip is correct');

  this.render(hbs`{{mdi-icon "bug" role="icon"}}`);
  assert.equal(this.$('svg').attr('role'), 'icon', 'Role is correct');

  const fill = 'green';
  this.set('fill', fill);
  this.render(hbs`{{mdi-icon "bug" fill=fill}}`);
  assert.equal(this.$('use').attr('fill'), fill, 'Fill is correct');
});