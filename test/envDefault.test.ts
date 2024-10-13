import { JEST_TEST_VARIABLE } from './dotenv';
it('should load JEST_TEST_VARIABLE from .env.default', () => {
  expect(JEST_TEST_VARIABLE).toBe('42')
})
