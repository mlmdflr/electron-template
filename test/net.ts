import { net } from '@/lib/net';

test('net get baidu', async () => {
  let req = await net<string>('https://www.baidu.com');
  console.log(req.length > 0);
});
