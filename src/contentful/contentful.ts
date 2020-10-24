// https://contentful.github.io/contentful.js/contentful/7.14.8/

import { createClient } from 'contentful';

const client = createClient({
  space: 'cvq3o6nozw70',
  accessToken: 'M8xVfJUhGk5UfKCFdEocvysdfT7JiZ0BGGyauSaNI1U',
});

export async function getContentType(contentType: string): Promise<any> {
  try {
    return await client.getContentType(contentType);
  } catch {
    return 'There was an error';
  }
}

export async function getEntryWithLinks(entryId: string): Promise<any> {
  try {
    return await client.getEntries({ 'sys.id': entryId, include: 10 });
  } catch {
    return 'There was an error';
  }
}
