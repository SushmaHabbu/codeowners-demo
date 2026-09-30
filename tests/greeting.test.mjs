import assert from 'node:assert/strict';
import test from 'node:test';
import { createGreeting } from '../src/greeting.mjs';

test('greets the supplied name', () => {
  assert.equal(createGreeting('Sushma'), 'Hello, Sushma!');
});

test('uses a friendly default when no name is supplied', () => {
  assert.equal(createGreeting(), 'Hello, friend!');
});