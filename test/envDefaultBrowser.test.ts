import * as dotenv from 'dotenv'
import { REACT_APP_JEST_TEST_VARIABLE } from '../src/dotenv'

// Load the .env.default file
dotenv.config({ path: '.env.default' })

describe('react Browser Environment - Default Environment Variables', () => {
  it('should load REACT_APP_JEST_TEST_VARIABLE from .env.default', () => {
    expect(REACT_APP_JEST_TEST_VARIABLE).toBe('21')
  })
})
