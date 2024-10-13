import * as dotenv from 'dotenv';
import { REACT_APP_JEST_TEST_IN_TEST } from '../src/dotenv';

// Load the .env.test file
dotenv.config({ path: '.env.test' });

describe('React Browser Environment - Test Environment Variables', () => {
  it('should load REACT_APP_JEST_TEST_IN_TEST from .env.test', () => {
    expect(REACT_APP_JEST_TEST_IN_TEST).toBe('15.5');
  });
});

