/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('should have hello property', function() {
    expect(this.app.hello).toBe('Hello');
  });

  it('should say hello properly', function() {
    expect(this.app.sayHello('John')).toBe('Hello John');
  });

  
});

