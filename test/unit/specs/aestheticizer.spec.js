import aestheticize from '@/utils/aestheticizer';

describe('aestheticizer.js', () => {
  it('should aestheticize alphabets correctly', () => {
    const input = 'abcdefghijklmnopqrstuvwxyz';
    const expected = 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ';
    expect(aestheticize(input)).toEqual(expected);
  });

  it('should aestheticize umlauts correctly', () => {
    const input = 'åÅäÄöÖüÜ';
    const expected = 'ａＡａａｏＯｕＵ';
    expect(aestheticize(input)).toEqual(expected);
  });

  it('should aestheticize correctly with newlines', () => {
    const input = 'a\nb\nc';
    const expected = 'ａ\nｂ\nｃ';
    expect(aestheticize(input)).toEqual(expected);
  });

  it('should aestheticize spaces correctly', () => {
    const input = 'a b c';
    const expected = 'ａ　ｂ　ｃ';
    expect(aestheticize(input)).toEqual(expected);
  });

  it('should skip non ascii characters (excluding some umlauts)', () => {
    const input = 'éÉë😂lit🤔fam€';
    const expected = 'ｌｉｔｆａｍ';
    expect(aestheticize(input)).toEqual(expected);
  });
});
