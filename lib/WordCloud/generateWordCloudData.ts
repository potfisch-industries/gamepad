export interface WordCloudEntry {
  word: string;
  name: string;
  amount: number;
  color: string;
  size: number;
}
export const generateWordCloudData = (
  source: string,
  minimumMentions: number,
): WordCloudEntry[] => {
  const res: Record<string, number> = {};

  source
    .toLowerCase()
    .replace('.', '')
    .replace(',', '')
    .replace(';', '')
    .replace('?', '')
    .replace('!', '')
    .split(' ')
    .forEach((word) => {
      if (word.length < 4) {
        return;
      }
      if (res[`${word}`]) {
        res[`${word}`] += 1;
      } else res[`${word}`] = 1;
    });

  return Object.entries(res)
    .map(([word, amount]) => ({
      word,
      name: word,
      amount,
      size: amount,
      color: 'black',
    }))
    .filter((entry) => entry.amount >= minimumMentions);
};
