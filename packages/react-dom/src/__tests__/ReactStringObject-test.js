// yarn test --watch reactstringobject

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;
let ReactDOM;

describe('string object test', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('string object toString', () => {
    function App() {
      return (
        <p>{new String('Text inside of a string constructor').toString()}</p>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    expect(container.innerHTML).toBe(
      '<p>Text inside of a string constructor</p>',
    );
  });

  it('string object', () => {
    function App() {
      return (
        <div className="App">
        <p>Literal</p>
        <p>{new String("Text inside of a string constructor")}</p>
      </div>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    expect(container.innerHTML).toBe(
      '<div class=\"App\"><p>Literal</p><p>Text inside of a string constructor</p></div>',
    );
  });

  it('works', () => {
    function App() {
      return (
        <div>
          <div>
            <Dialog>
              <Button>hello</Button>
            </Dialog>
          </div>
        </div>
      );
    }

    function Dialog({children}) {
      return (
        <div>
          <div>
            <p>Hello</p>
            {children}
          </div>
        </div>
      );
    }

    function Button({children}) {
      return <button>{children}</button>;
    }

    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    // expect(container.innerHTML).toBe(
    //   '<p>hello</p>'
    // );
  });
});
