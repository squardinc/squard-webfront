import { SampleService } from 'src/services/Sample'

describe('Sample', () => {
    test('say hello', () => {
        const service = new SampleService()
        expect(service.hello()).toBe('Hello, world.')
    })
})