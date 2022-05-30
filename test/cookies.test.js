import {expect} from 'chai';
import jsdom from 'jsdom-global';
import {getCookie, setCookie} from '../cookies.js';

let cleanup;

beforeEach(() => {
  cleanup = jsdom();
})

describe('get cookies', () => {
  it('should return an empty string for a non-existent cookie', () => {
    expect(getCookie('doesNotExist')).to.be.empty;
  });

  it('should return the value of an existing cookie', () => {
    document.cookie = 'exists=yay!; another=one';

    expect(getCookie('exists')).to.equal('yay!');
  });
});

describe('set cookies', () => {
  it('should add a cookie when none have been set', () => {
    setCookie('newWorld', '1');

    expect(document.cookie).to.equal('newWorld=1');
  });

  it('should add a cookie when others have been set', () => {
    document.cookie = 'exists=woo!';
    setCookie('newWorld', '1');

    expect(document.cookie).to.equal('exists=woo!; newWorld=1');
  });

  it('should overwrite an existing cookie', () => {
    document.cookie = 'exists=woo!';
    setCookie('exists', 'nope!');

    expect(document.cookie).to.equal('exists=nope!');
  });
});

afterEach(() => {
  cleanup();
})
