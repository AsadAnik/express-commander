import { capitalize } from '../../cli/utils/text.util';

describe('Text Util', () => {
    it('should text utils gives perfect formation', () => {
        const exampleText: string = 'Asad';
        const unResolvedText: string = 'asad';
        const resolvedText: string = capitalize(unResolvedText);

        expect(exampleText).toBe(resolvedText);
    });
});