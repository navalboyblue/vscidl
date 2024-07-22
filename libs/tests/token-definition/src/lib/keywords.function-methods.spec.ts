import { LogManager } from '@idl/logger';
import { IDL_INDEX_OPTIONS, IDLIndex } from '@idl/parsing/index';
import { GetExtensionPath } from '@idl/shared';
import { readFile } from 'fs/promises';
import { Position } from 'vscode-languageserver/node';

IDL_INDEX_OPTIONS.IS_TEST = true;

describe(`[auto generated] Correctly find definitions for keywords`, () => {
  it(`[auto generated] real`, async () => {
    // create index
    const index = new IDLIndex(
      new LogManager({
        alert: () => {
          // do nothing
        },
      }),
      0
    );

    // specify reference filepath
    const filepath = GetExtensionPath('idl/test/token-def/all_cases.pro');

    // parse file for tests
    await index.indexFile(GetExtensionPath('idl/test/token-def/all_cases.pro'));

    // define position
    const position_0: Position = { line: 82, character: 24 };

    // define expected token we extract
    const expectedFound_0 = {
      docs: '',
      private: false,
      source: 'internal',
      type: [{ name: 'any', display: 'any', args: [], meta: {} }],
      direction: 'bidirectional',
      req: false,
      display: 'kw',
      code: true,
      pos: [15, 33, 2],
      name: 'kw',
      globalType: 'fm',
      globalName: 'nystruct0::funcmethod1',
    };

    // get expected and remove file
    const found_0 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_0
    );
    if (found_0 !== undefined) {
      delete found_0.file;
    }

    // verify results
    expect(expectedFound_0).toEqual(found_0);

    // define position
    const position_1: Position = { line: 85, character: 24 };

    // define expected token we extract
    const expectedFound_1 = {
      docs: '',
      private: false,
      source: 'internal',
      type: [{ name: 'any', display: 'any', args: [], meta: {} }],
      direction: 'bidirectional',
      req: false,
      display: 'kw',
      code: true,
      pos: [20, 32, 2],
      name: 'kw',
      globalType: 'fm',
      globalName: 'nystruct::funcmethod2',
    };

    // get expected and remove file
    const found_1 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_1
    );
    if (found_1 !== undefined) {
      delete found_1.file;
    }

    // verify results
    expect(expectedFound_1).toEqual(found_1);
  });

  it(`[auto generated] fake`, async () => {
    // create index
    const index = new IDLIndex(
      new LogManager({
        alert: () => {
          // do nothing
        },
      }),
      0
    );

    // specify reference filepath
    const filepath = GetExtensionPath('idl/test/token-def/all_cases.pro');

    // parse file for tests
    await index.indexFile(GetExtensionPath('idl/test/token-def/all_cases.pro'));

    // define position
    const position_0: Position = { line: 82, character: 33 };

    // define expected token we extract
    const expectedFound_0 = undefined;

    // get expected and remove file
    const found_0 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_0
    );
    if (found_0 !== undefined) {
      delete found_0.file;
    }

    // verify results
    expect(expectedFound_0).toEqual(found_0);

    // define position
    const position_1: Position = { line: 85, character: 33 };

    // define expected token we extract
    const expectedFound_1 = undefined;

    // get expected and remove file
    const found_1 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_1
    );
    if (found_1 !== undefined) {
      delete found_1.file;
    }

    // verify results
    expect(expectedFound_1).toEqual(found_1);

    // define position
    const position_2: Position = { line: 88, character: 25 };

    // define expected token we extract
    const expectedFound_2 = undefined;

    // get expected and remove file
    const found_2 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_2
    );
    if (found_2 !== undefined) {
      delete found_2.file;
    }

    // verify results
    expect(expectedFound_2).toEqual(found_2);
  });

  it(`[auto generated] real binary`, async () => {
    // create index
    const index = new IDLIndex(
      new LogManager({
        alert: () => {
          // do nothing
        },
      }),
      0
    );

    // specify reference filepath
    const filepath = GetExtensionPath('idl/test/token-def/all_cases.pro');

    // parse file for tests
    await index.indexFile(GetExtensionPath('idl/test/token-def/all_cases.pro'));

    // define position
    const position_0: Position = { line: 82, character: 46 };

    // define expected token we extract
    const expectedFound_0 = {
      docs: '',
      private: false,
      source: 'internal',
      type: [{ name: 'any', display: 'any', args: [], meta: {} }],
      direction: 'bidirectional',
      req: false,
      display: 'kwb',
      code: true,
      pos: [15, 42, 3],
      name: 'kwb',
      globalType: 'fm',
      globalName: 'nystruct0::funcmethod1',
    };

    // get expected and remove file
    const found_0 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_0
    );
    if (found_0 !== undefined) {
      delete found_0.file;
    }

    // verify results
    expect(expectedFound_0).toEqual(found_0);

    // define position
    const position_1: Position = { line: 85, character: 46 };

    // define expected token we extract
    const expectedFound_1 = {
      docs: '',
      private: false,
      source: 'internal',
      type: [{ name: 'any', display: 'any', args: [], meta: {} }],
      direction: 'bidirectional',
      req: false,
      display: 'kwb',
      code: true,
      pos: [20, 41, 3],
      name: 'kwb',
      globalType: 'fm',
      globalName: 'nystruct::funcmethod2',
    };

    // get expected and remove file
    const found_1 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_1
    );
    if (found_1 !== undefined) {
      delete found_1.file;
    }

    // verify results
    expect(expectedFound_1).toEqual(found_1);
  });

  it(`[auto generated] fake binary`, async () => {
    // create index
    const index = new IDLIndex(
      new LogManager({
        alert: () => {
          // do nothing
        },
      }),
      0
    );

    // specify reference filepath
    const filepath = GetExtensionPath('idl/test/token-def/all_cases.pro');

    // parse file for tests
    await index.indexFile(GetExtensionPath('idl/test/token-def/all_cases.pro'));

    // define position
    const position_0: Position = { line: 82, character: 53 };

    // define expected token we extract
    const expectedFound_0 = undefined;

    // get expected and remove file
    const found_0 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_0
    );
    if (found_0 !== undefined) {
      delete found_0.file;
    }

    // verify results
    expect(expectedFound_0).toEqual(found_0);

    // define position
    const position_1: Position = { line: 85, character: 53 };

    // define expected token we extract
    const expectedFound_1 = undefined;

    // get expected and remove file
    const found_1 = await index.getTokenDef(
      filepath,
      await readFile(filepath, 'utf-8'),
      position_1
    );
    if (found_1 !== undefined) {
      delete found_1.file;
    }

    // verify results
    expect(expectedFound_1).toEqual(found_1);
  });
});
